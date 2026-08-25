<?php
/**
 * Game Callback Handler for Huido Seamless Wallet
 * This receives bet data from main callback (SeamlessEndpoints.php)
 * and processes it against the game database
 */

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

header('Content-Type: application/json; charset=utf-8');

// Create logs directory if it doesn't exist
$log_dir = __DIR__ . '/apilogs';
if (!file_exists($log_dir)) {
    mkdir($log_dir, 0777, true);
}

/**
 * Write to log file
 */
function writeLog($message) {
    global $log_dir;
    $log_file = $log_dir . '/game_callback_' . date('Y-m-d') . '.txt';
    $timestamp = date('Y-m-d H:i:s');
    $log_message = "[{$timestamp}] {$message}\n";
    file_put_contents($log_file, $log_message, FILE_APPEND);
    error_log($message); // Also log to PHP error log
}

writeLog("========================================");
writeLog("=== Game Callback Received ===");
writeLog("Request Method: " . $_SERVER['REQUEST_METHOD']);
writeLog("Request URI: " . $_SERVER['REQUEST_URI']);

// Database connection (overrides any external includes)
// Requested credentials: DB name/user/pass = 365-lotterysql
$DB_HOST = getenv('DB_HOST') ?: 'localhost';
$DB_NAME = 'jhvdata';
$DB_USER = 'jhvdata';
$DB_PASS = 'jhvdata';

// Provide a simple SQL export helper
function exportSql($sql) {
    global $log_dir;
    $export_file = $log_dir . '/sql_export_' . date('Y-m-d') . '.sql';
    $line = $sql;
    if (substr(trim($line), -1) !== ';') {
        $line .= ';';
    }
    file_put_contents($export_file, $line . "\n", FILE_APPEND);
}

try {
    $conn = @new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    if ($conn && !$conn->connect_error) {
        @$conn->set_charset('utf8mb4');
        writeLog("✅ Database connected (DB: {$DB_NAME}, User: {$DB_USER})");
    } else {
        writeLog("❌ Database connection failed: " . ($conn ? $conn->connect_error : 'unknown error'));
        sendResponse(['code' => 1, 'msg' => 'Database connection failed'], 500);
    }
} catch (Throwable $e) {
    writeLog("❌ Database connection exception: " . $e->getMessage());
    sendResponse(['code' => 1, 'msg' => 'Database connection error'], 500);
}

/**
 * Send JSON response
 */
function sendResponse($data, $status = 200) {
    writeLog("Sending response: " . json_encode($data) . " (Status: {$status})");
    http_response_code($status);
    echo json_encode($data);
    exit;
}

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['code' => 1, 'msg' => 'Method not allowed'], 405);
}

// Get request data
$raw_input = file_get_contents('php://input');
writeLog("Raw input: " . $raw_input);

$input = json_decode($raw_input, true);
writeLog("Parsed input: " . json_encode($input, JSON_PRETTY_PRINT));

if (!$input) {
    writeLog("ERROR: Invalid JSON");
    sendResponse(['code' => 1, 'msg' => 'Invalid JSON input'], 400);
}

// Validate required fields
$required = ['user_id', 'game_code', 'bet_amount', 'win_amount', 'serial_number', 'game_round'];
foreach ($required as $field) {
    if (!isset($input[$field])) {
        writeLog("ERROR: Missing field: {$field}");
        sendResponse(['code' => 1, 'msg' => "Missing field: {$field}"], 400);
    }
}

$user_id = $input['user_id'];
$game_code = $input['game_code'];
$bet_amount_brl = floatval($input['bet_amount']);
$win_amount_brl = floatval($input['win_amount']);
$serial_number = $input['serial_number'];
$game_round = $input['game_round'];
$vendor_code_raw = $input['vendor_code'] ?? 0;
$vendor_code_num = is_numeric($vendor_code_raw) ? intval($vendor_code_raw) : 0;
$vendor_code_str = is_string($vendor_code_raw) ? strtolower(trim($vendor_code_raw)) : '';
$timestamp = $input['timestamp'] ?? date('Y-m-d H:i:s');

// --- User ID Parsing Logic ---
// Incoming user_id might be: hd2bf37kw9429usd (Prefix + ResellerCode + UserID + CurrencySuffix)
// We need to extract '9429' (Internal User ID)

$original_user_id_input = $user_id;

// 1. Strip known currency suffixes (3 chars)
$known_suffixes = ['usd', 'cop', 'uus', 'inr', 'brl', 'thb', 'idr', 'vnd', 'myr', 'php', 'krw', 'eur'];
foreach ($known_suffixes as $suffix) {
    if (substr($user_id, -strlen($suffix)) === $suffix) {
        $user_id = substr($user_id, 0, -strlen($suffix));
        writeLog("Stripped suffix '{$suffix}'. Result: {$user_id}");
        break;
    }
}

// 2. Try to match against DB directly first
$check_stmt = $conn->prepare("SELECT user_id FROM argame_balances WHERE user_id = ?");
$check_stmt->bind_param("s", $user_id);
$check_stmt->execute();
if ($check_stmt->get_result()->num_rows > 0) {
    writeLog("Direct match found for user_id: {$user_id}");
} else {
    // 3. If no direct match, try to extract numeric ID from the end
    // Assuming internal User IDs are numeric (e.g. 9429)
    if (preg_match('/(\d+)$/', $user_id, $matches)) {
        $potential_id = $matches[1];
        writeLog("Extracted potential numeric ID: {$potential_id}");
        
        // Verify this ID exists in DB
        $verify_stmt = $conn->prepare("SELECT user_id FROM argame_balances WHERE user_id = ?");
        $verify_stmt->bind_param("s", $potential_id);
        $verify_stmt->execute();
        if ($verify_stmt->get_result()->num_rows > 0) {
            $user_id = $potential_id;
            writeLog("Matched numeric ID in DB: {$user_id}");
        } else {
            writeLog("Potential ID {$potential_id} not found in DB.");
            // Fallback: Try fuzzy match (suffix match)
            // Warning: This can be slow on large tables, but necessary if prefix is unknown
            $fuzzy_stmt = $conn->prepare("SELECT user_id FROM argame_balances WHERE ? LIKE CONCAT('%', user_id) LIMIT 1");
            $fuzzy_stmt->bind_param("s", $user_id);
            $fuzzy_stmt->execute();
            $fuzzy_res = $fuzzy_stmt->get_result();
            if ($fuzzy_res->num_rows > 0) {
                $row = $fuzzy_res->fetch_assoc();
                $user_id = $row['user_id'];
                writeLog("Fuzzy match found: {$user_id}");
            } else {
                writeLog("No fuzzy match found.");
                // Revert to original input if all else fails (will likely fail balance check)
                // But keep the suffix-stripped version as it's more likely to be correct than with suffix
            }
        }
    } else {
        writeLog("No numeric ID found in string.");
    }
}
// --- End User ID Parsing Logic ---

// Dynamic Vendor Lookup from JSON files
function lookupVendorFromFiles($gameCode) {
    $jsonFiles = [
        'inout.json' => 87, // Priority check for INOUT
        'jili.json' => 18,
        'pg.json' => 22,
        'km.json' => 9,
        'evo.json' => 17,
        'jdb.json' => 6,
        'cq9.json' => 2,
        'ag_playace.json' => 12,
        'v8.json' => 21,
        'microgaming.json' => 4
    ];

    $baseDir = __DIR__ . '/Chub94/';

    foreach ($jsonFiles as $file => $defaultVendorId) {
        $filePath = $baseDir . $file;
        if (file_exists($filePath)) {
            $content = file_get_contents($filePath);
            $data = json_decode($content, true);
            
            // Handle different JSON structures if necessary
            // Most follow { "gameLists": [ ... ] } or just [ ... ]
            $list = $data['gameLists'] ?? ($data['data'] ?? $data);
            
            if (is_array($list)) {
                foreach ($list as $game) {
                    // Check both gameID and gameCode keys just in case
                    $gid = $game['gameID'] ?? ($game['gameCode'] ?? '');
                    if ($gid === $gameCode) {
                        // Return specific vendorCode from JSON if present, else default for file
                        return $game['vendorCode'] ?? $defaultVendorId;
                    }
                }
            }
        }
    }
    return null;
}

// Attempt to correct vendor_code using local JSON lookup
$correctedVendor = lookupVendorFromFiles($game_code);
if ($correctedVendor !== null) {
    $vendor_code_raw = $correctedVendor;
    $vendor_code_num = intval($correctedVendor);
    // Update string representation if needed
    $vendorMapNames = [
        87 => 'inout', 40 => 'inout',
        18 => 'jili', 37 => 'jili',
        22 => 'pg', 5 => 'pg',
        9 => 'km', 26 => 'km',
        17 => 'evo', 16 => 'evo',
        20 => 'spribe'
    ];
    $vendor_code_str = $vendorMapNames[$vendor_code_num] ?? strtolower(trim((string)$correctedVendor));
    writeLog("Corrected vendor_code to {$vendor_code_num} ({$vendor_code_str}) for game: {$game_code}");
}

// Currency handling: accept PKR/INR as already-local; only convert when amounts are BRL
$currency_code = strtoupper($input['currency_code'] ?? 'BRL');
// Exchange rates from environment, with sensible defaults
$BRL_TO_INR = floatval(getenv('BRL_TO_INR_RATE') ?: '17.50');
$BRL_TO_PKR = floatval(getenv('BRL_TO_PKR_RATE') ?: '56.00');
$BRL_TO_BDT = floatval(getenv('BRL_TO_BDT_RATE') ?: '20.00');

// Optional: choose default local ccy when incoming is BRL
$DEFAULT_LOCAL_CCY = strtoupper(getenv('DEFAULT_LOCAL_CCY') ?: 'INR'); // INR by default
if (!in_array($DEFAULT_LOCAL_CCY, ['INR','PKR','BDT'])) { $DEFAULT_LOCAL_CCY = 'INR'; }

writeLog("User ID: {$user_id}");
writeLog("Game: {$game_code}, Round: {$game_round}");

// Decide how to treat incoming amounts
// Decide how to treat incoming amounts
// Rates (approximate, should match helpers.php)
$rates_to_inr = [
    'USD' => 85.0, 'UUS' => 85.0, 'BRL' => 17.5, 'BDT' => 0.75, 'PKR' => 0.30, 'MYR' => 18.5,
    'IDR' => 0.0055, 'SGD' => 63.0, 'THB' => 2.4, 'VND' => 0.0035, 'LAK' => 0.004,
    'KHR' => 0.02, 'BND' => 63.0, 'PHP' => 1.5, 'JPY' => 0.55, 'MMK' => 0.04,
    'KRW' => 0.06, 'EUR' => 92.0, 'GBP' => 108.0, 'AUD' => 55.0, 'RUB' => 0.90,
    'PLN' => 21.0, 'MXN' => 4.2, 'SEK' => 8.0, 'NOK' => 7.8, 'CAD' => 60.0,
    'KES' => 0.65, 'TRY' => 2.5, 'ILS' => 23.0, 'ZAR' => 4.5, 'COP' => 0.02,
    'CLP' => 0.09, 'NPR' => 0.62, 'TND' => 27.0, 'AED' => 23.0, 'VES' => 2.0,
    'ARS' => 0.08, 'NGN' => 0.05, 'AMD' => 0.20, 'DZD' => 0.63, 'MAD' => 8.5
];

if ($currency_code === 'PKR') {
    $local_ccy = 'PKR';
    $exchange_rate = 1.0;
    $bet_amount_local = $bet_amount_brl; // Variable name is misleading, it's actually input amount
    $win_amount_local = $win_amount_brl;
    writeLog("Currency: PKR (treated as local), Using rate = 1.0");
} elseif ($currency_code === 'INR') {
    $local_ccy = 'INR';
    $exchange_rate = 1.0;
    $bet_amount_local = $bet_amount_brl;
    $win_amount_local = $win_amount_brl;
    writeLog("Currency: INR (treated as local), Using rate = 1.0");
} elseif ($currency_code === 'BDT') {
    $local_ccy = 'BDT';
    $exchange_rate = 1.0;
    $bet_amount_local = $bet_amount_brl;
    $win_amount_local = $win_amount_brl;
    writeLog("Currency: BDT (treated as local), Using rate = 1.0");
} else {
    // Convert to default local currency (usually INR)
    $local_ccy = $DEFAULT_LOCAL_CCY;
    
    // Determine rate from Incoming Currency -> INR
    $rate_to_inr = $rates_to_inr[$currency_code] ?? 1.0; // Default to 1.0 if unknown
    
    // If local currency is not INR, we would need to convert INR -> Local
    // But for now assuming Local is INR for these cases as per original logic
    // If local is PKR/BDT but incoming is something else, we might need cross rate
    // For simplicity, let's stick to INR as the base for calculation if not direct match
    
    if ($local_ccy === 'INR') {
        $exchange_rate = $rate_to_inr;
    } else {
        // Fallback: If local is PKR/BDT but incoming is USD/COP etc.
        // This part was not fully robust in original code, defaulting to BRL logic.
        // Let's try to be smarter: Convert Incoming -> INR -> Local
        $inr_amount = $bet_amount_brl * $rate_to_inr;
        
        if ($local_ccy === 'PKR') {
            // INR -> PKR (approx 1 INR = 3.3 PKR, or use inverse of PKR->INR 0.30)
            $rate_inr_to_local = 1 / 0.30;
        } elseif ($local_ccy === 'BDT') {
            // INR -> BDT (approx 1 INR = 1.33 BDT, or use inverse of BDT->INR 0.75)
            $rate_inr_to_local = 1 / 0.75;
        } else {
            $rate_inr_to_local = 1.0;
        }
        $exchange_rate = $rate_to_inr * $rate_inr_to_local;
    }

    $bet_amount_local = $bet_amount_brl * $exchange_rate;
    $win_amount_local = $win_amount_brl * $exchange_rate;
    writeLog("Currency: {$currency_code} → {$local_ccy}, Rate to INR: {$rate_to_inr}, Final Rate: {$exchange_rate}");
}

writeLog("Bet: {$bet_amount_local} {$local_ccy}, Win: {$win_amount_local} {$local_ccy}");

// Apply bet limits (global defaults first, then per-user overrides)
// Global defaults from DB, fallback to env
$min_bet_default = 0.0;
$max_bet_default = 0.0; // 0 means no cap
try {
    $def_stmt = $conn->prepare("SELECT min_bet, max_bet FROM bet_limits_defaults WHERE id = 1");
    if ($def_stmt) {
        $def_stmt->execute();
        $def_res = $def_stmt->get_result();
        if ($def_res && $def_res->num_rows > 0) {
            $dr = $def_res->fetch_assoc();
            $min_bet_default = floatval($dr['min_bet']);
            $max_bet_default = floatval($dr['max_bet']);
        }
    }
} catch (Throwable $e) {
    writeLog("Bet default lookup error: " . $e->getMessage());
}
if ($min_bet_default <= 0 && $max_bet_default <= 0) {
    // fallback to env only if DB defaults absent
    $min_bet_default = floatval(getenv('DEFAULT_MIN_BET') ?: '0');
    $max_bet_default = floatval(getenv('DEFAULT_MAX_BET') ?: '0');
}
$applied_min_bet = $min_bet_default;
$applied_max_bet = $max_bet_default;
try {
    $limit_stmt = $conn->prepare("SELECT min_bet, max_bet FROM bet_limits WHERE user_id = ?");
    if ($limit_stmt) {
        $limit_stmt->bind_param("s", $user_id);
        $limit_stmt->execute();
        $limit_res = $limit_stmt->get_result();
        if ($limit_res && $limit_res->num_rows > 0) {
            $lr = $limit_res->fetch_assoc();
            $applied_min_bet = floatval($lr['min_bet']);
            $applied_max_bet = floatval($lr['max_bet']);
        }
    }
} catch (Throwable $e) {
    // If table doesn't exist, fallback to defaults
    writeLog("Bet limits lookup error: " . $e->getMessage());
}
writeLog("Applied bet limits for {$user_id}: min={$applied_min_bet} {$local_ccy}, max=" . ($applied_max_bet > 0 ? $applied_max_bet : 'no cap') . " {$local_ccy} (global defaults used where per-user not set)");

if ($bet_amount_local < $applied_min_bet) {
    writeLog("Bet below minimum: bet={$bet_amount_local}, min={$applied_min_bet}");
    sendResponse(['code' => 1, 'msg' => 'Bet below minimum', 'min_bet' => $applied_min_bet], 400);
}
if ($applied_max_bet > 0 && $bet_amount_local > $applied_max_bet) {
    writeLog("Bet exceeds maximum: bet={$bet_amount_local}, max={$applied_max_bet}");
    sendResponse(['code' => 1, 'msg' => 'Bet exceeds maximum', 'max_bet' => $applied_max_bet], 400);
}

// Check for duplicate serial number (retry handling) - SKIP if table doesn't exist
$duplicate_result = null;
try {
    writeLog("Checking for duplicate serial number: {$serial_number}");
    $check_stmt = $conn->prepare("SELECT id FROM game_bet_logs WHERE serial_number = ?");
    if ($check_stmt) {
        $check_stmt->bind_param("s", $serial_number);
        // Export duplicate check query
        $escaped_serial_for_export = $conn->real_escape_string($serial_number);
        exportSql("SELECT id FROM game_bet_logs WHERE serial_number = '" . $escaped_serial_for_export . "'");
        $check_stmt->execute();
        $duplicate_result = $check_stmt->get_result();
        writeLog("Duplicate check completed");
    } else {
        writeLog("⚠️ game_bet_logs table doesn't exist - skipping duplicate check");
    }
} catch (Exception $e) {
    writeLog("⚠️ Error checking duplicates (table may not exist): " . $e->getMessage());
}

// Get current balance from argame_balances
writeLog("Looking up user_id in argame_balances: {$user_id}");
$balance_stmt = $conn->prepare("SELECT balance FROM argame_balances WHERE user_id = ?");
$balance_stmt->bind_param("s", $user_id);
// Export the SELECT to .sql file
$escaped_user = $conn->real_escape_string($user_id);
exportSql("SELECT balance FROM argame_balances WHERE user_id = '" . $escaped_user . "'");
$balance_stmt->execute();
$balance_result = $balance_stmt->get_result();

if ($balance_result->num_rows === 0) {
    writeLog("❌ User not found in argame_balances table! User ID: {$user_id}");
    writeLog("This means the user_id doesn't match any record in argame_balances");
    sendResponse(['code' => 1, 'msg' => 'User not found in database'], 404);
}

$balance_row = $balance_result->fetch_assoc();
$current_balance_local = floatval($balance_row['balance']);

writeLog("✅ User found! Current balance ({$local_ccy}): {$current_balance_local}");

// If duplicate (retry), return success with latest balance
if ($duplicate_result && $duplicate_result->num_rows > 0) {
    writeLog("Duplicate serial number - returning success");
    // Return INR balance only
    if ($local_ccy === 'PKR') {
        sendResponse([
            'code' => 0,
            'msg' => 'Success (duplicate)',
            'balance_pkr' => $current_balance_local
        ]);
    } elseif ($local_ccy === 'BDT') {
        sendResponse([
            'code' => 0,
            'msg' => 'Success (duplicate)',
            'balance_bdt' => $current_balance_local
        ]);
    } else {
        sendResponse([
            'code' => 0,
            'msg' => 'Success (duplicate)',
            'balance_inr' => $current_balance_local
        ]);
    }
}

// Calculate new balance
// Seamless wallet: balance = balance - bet_amount + win_amount
$balance_change_local = -$bet_amount_local + $win_amount_local;
$new_balance_local = $current_balance_local + $balance_change_local;

writeLog("Balance change ({$local_ccy}): {$balance_change_local}, New balance ({$local_ccy}): {$new_balance_local}");

// Check if balance is sufficient
if ($new_balance_local < 0) {
    writeLog("Insufficient balance");
    sendResponse(['code' => 1, 'msg' => 'Insufficient balance'], 400);
}

// Update balance in argame_balances
$update_stmt = $conn->prepare("UPDATE argame_balances SET balance = ?, updated_at = NOW() WHERE user_id = ?");
$update_stmt->bind_param("ds", $new_balance_local, $user_id);
// Export the UPDATE to .sql file
exportSql("UPDATE argame_balances SET balance = " . sprintf('%.8f', $new_balance_local) . ", updated_at = NOW() WHERE user_id = '" . $escaped_user . "'");

if (!$update_stmt->execute()) {
    writeLog("Failed to update balance: " . $update_stmt->error);
    sendResponse(['code' => 1, 'msg' => 'Failed to update balance'], 500);
}

writeLog("Balance updated successfully");

// Convert balance back to BRL for response if needed (SeamlessEndpoints expects local balance key)
$new_balance_brl = $new_balance_local / $exchange_rate;

writeLog("Preparing response - Balance {$local_ccy}: {$new_balance_local}");

// Log bet if bet_amount > 0 OR win_amount > 0 (log both bets and wins)
// DO THIS AFTER preparing response to avoid crashes
if ($bet_amount_local > 0 || $win_amount_local > 0) {
    try {
        $profit_loss = $win_amount_local - $bet_amount_local;
        
        $vendor_code = $vendor_code_raw; // Ensure variable is defined
        $log_stmt = $conn->prepare("INSERT INTO game_bet_logs (user_id, vendor_code, game_code, bet_amount, win_amount, profit_loss, balance_before, balance_after, serial_number, game_round, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())");
        if ($log_stmt) {
            // Changed 'i' to 's' for vendor_code as it is varchar(50)
            $log_stmt->bind_param("sssdddddss", $user_id, $vendor_code, $game_code, $bet_amount_local, $win_amount_local, $profit_loss, $current_balance_local, $new_balance_local, $serial_number, $game_round);
            if (!$log_stmt->execute()) {
                writeLog("❌ Bet logging execute failed: " . $log_stmt->error);
            } else {
                writeLog("✅ Bet logged successfully");
            }
            // Export the INSERT to .sql file
            $escaped_game_code = $conn->real_escape_string($game_code);
            $escaped_serial = $conn->real_escape_string($serial_number);
            $escaped_round = $conn->real_escape_string($game_round);
            exportSql(
                "INSERT INTO game_bet_logs (user_id, vendor_code, game_code, bet_amount, win_amount, profit_loss, balance_before, balance_after, serial_number, game_round, created_at) VALUES ('" .
                $escaped_user . "', " . intval($vendor_code) . ", '" . $escaped_game_code . "', " . sprintf('%.8f', $bet_amount_local) . ", " . sprintf('%.8f', $win_amount_local) . ", " . sprintf('%.8f', $profit_loss) . ", " . sprintf('%.8f', $current_balance_local) . ", " . sprintf('%.8f', $new_balance_local) . ", '" . $escaped_serial . "', '" . $escaped_round . "', NOW())"
            );
            $lvl = 0;
            $lvl_stmt = @$conn->prepare("SELECT lvl FROM vip WHERE userid = ? LIMIT 1");
            if ($lvl_stmt) { $lvl_stmt->bind_param("s", $user_id); $lvl_stmt->execute(); $lvl_res = $lvl_stmt->get_result(); if ($lvl_res && $lvl_res->num_rows > 0) { $lrw = $lvl_res->fetch_assoc(); $lvl = intval($lrw['lvl']); } }
            $rate = null;
            if (in_array($lvl, [0,1,2])) { $rate = 0.05; } elseif (in_array($lvl, [3,4,5])) { $rate = 0.10; } elseif (in_array($lvl, [6,7,8])) { $rate = 0.15; } elseif ($lvl === 9) { $rate = 0.20; } elseif ($lvl === 10) { $rate = 0.30; }
            if ($rate === null) { $rate = 0.05; }
            $vendorMap = [2=>2,4=>4,6=>6,18=>18,17=>17,12=>12,9=>9,57=>57,101=>101,21=>21,22=>22,87=>40];
            $nameExact = [
                'cq9'=>2,'microgaming'=>4,'mg'=>4,'jdb'=>6,'jili'=>18,'evo'=>17,'evolutionlive'=>17,
                'ag'=>12,'ag_playace'=>12,'km'=>9,'eg'=>57,'idg'=>101,'v8'=>21,'v8card'=>21,
                'pg'=>22,'pgsoft'=>22,'inout'=>40
            ];
            $slotsVendors = [
                'pragmaticplay-eu','pragmaticplay-asia','fachaigaming','eazygaming','bigtimegaming','gameart','bgaming','netent','relaxgaming','skywind','playngo','redtiger','playson','evoplay-asia','evoplay-eu','habanero','ygrgaming','bng-asia','bng3oks-row','onegaming','epicwin','smartsoft','wonwon','btgaming','pix','galaxsys','expanse','fastspin','rg','nextspin','pgsgaming','rich88','tf','568win','mini','2j','ongaming','astar','aog','luckysportgaming','koolbet','bng','btigaming','tfg','gameart','unitedgaming'
            ];
            $liveVendors = [
                'pragmaticplaylive-eu','pragmaticplaylive-asia','dreamgaming','sexy','sagaming','ezugi','yeebet','playtech','evolutionlive'
            ];
            $sportsVendors = [
                'bti','sbo','dpesports','dpsports','sbovirtualsport','sportsbook','saba'
            ];
            $codeType = 3;
            if ($vendor_code_num && isset($vendorMap[$vendor_code_num])) {
                $codeType = intval($vendorMap[$vendor_code_num]);
            } elseif ($vendor_code_str) {
                if (isset($nameExact[$vendor_code_str])) {
                    $codeType = intval($nameExact[$vendor_code_str]);
                } elseif (in_array($vendor_code_str, $liveVendors)) {
                    $codeType = 1;
                } elseif (in_array($vendor_code_str, $sportsVendors)) {
                    $codeType = 1;
                } elseif ($vendor_code_str === 'rummy') {
                    $codeType = 2;
                } elseif (in_array($vendor_code_str, $slotsVendors)) {
                    $codeType = 3;
                }
            }
            $washVolume = intval($bet_amount_local);
            $rebAmt = (float)($washVolume * $rate);
            $colCheck = @$conn->query("SHOW COLUMNS FROM rebetrec LIKE 'prakara'");
            $hasPrakara = ($colCheck && $colCheck->num_rows > 0);
            if ($hasPrakara) {
                $ins = @$conn->prepare("INSERT INTO rebetrec (user_id, rebet, rate, motta, created_at, prakara) VALUES (?, ?, ?, ?, NOW(), ?)");
                if ($ins) { $ins->bind_param("isddi", $user_id, $washVolume, $rate, $rebAmt, $codeType); @$ins->execute(); }
            } else {
                $ins = @$conn->prepare("INSERT INTO rebetrec (user_id, rebet, rate, motta, created_at) VALUES (?, ?, ?, ?, NOW())");
                if ($ins) { $ins->bind_param("isdd", $user_id, $washVolume, $rate, $rebAmt); @$ins->execute(); }
            }
            $ck = @$conn->prepare("SELECT rebet FROM shonu_kaichila WHERE balakedara = ? LIMIT 1");
            if ($ck) { $ck->bind_param("s", $user_id); $ck->execute(); $ckr = $ck->get_result(); if ($ckr && $ckr->num_rows === 1) { $up = @$conn->prepare("UPDATE shonu_kaichila SET rebet = rebet + ? WHERE balakedara = ?"); if ($up) { $up->bind_param("ds", $washVolume, $user_id); @$up->execute(); } } else { $inw = @$conn->prepare("INSERT INTO shonu_kaichila (balakedara, rebet) VALUES (?, ?)"); if ($inw) { $inw->bind_param("sd", $user_id, $washVolume); @$inw->execute(); } } }

            // VIP Level Update Logic
            try {
                $vipquery = "SELECT expe, lvl FROM vip WHERE userid = ?";
                $vip_stmt = $conn->prepare($vipquery);
                if ($vip_stmt) {
                    $vip_stmt->bind_param("s", $user_id);
                    $vip_stmt->execute();
                    $vipresult = $vip_stmt->get_result();
                    
                    if ($vipresult->num_rows >= 1) {
                        $viparr = $vipresult->fetch_assoc();
                        $expe = $viparr['expe'] + $bet_amount_local;
                        $orlvl = $viparr['lvl'];
                        $lvl = $orlvl;
                        $giveamt = 0;

                        if($expe >= 3000 && $expe < 30000){
                            $lvl = 1;
                            $diff = $lvl - $orlvl;
                            if($diff == 1) $giveamt = 60 + 30;
                        }
                        else if($expe >= 30000 && $expe < 400000){
                            $lvl = 2;
                            $diff = $lvl - $orlvl;
                            if($diff == 1) $giveamt = 180 + 90;
                            else if($diff == 2) $giveamt = 60 + 30 + 180 + 90;
                        }
                        else if($expe >= 400000 && $expe < 4000000){
                            $lvl = 3;
                            $diff = $lvl - $orlvl;
                            if($diff == 1) $giveamt = 690 + 290;
                            else if($diff == 2) $giveamt = 180 + 90 + 690 + 290;
                            else if($diff == 3) $giveamt = 60 + 30 + 180 + 90 + 690 + 290;
                        }
                        else if($expe >= 4000000 && $expe < 20000000){
                            $lvl = 4;
                            $diff = $lvl - $orlvl;
                            if($diff == 1) $giveamt = 1890 + 890;
                            else if($diff == 2) $giveamt = 690 + 290 + 1890 + 890;
                            else if($diff == 3) $giveamt = 180 + 90 + 690 + 290 + 1890 + 890;
                            else if($diff == 4) $giveamt = 60 + 30 + 180 + 90 + 690 + 290 + 1890 + 890;
                        }
                        else if($expe >= 20000000){
                            $lvl = 5;
                            $diff = $lvl - $orlvl;
                            if($diff == 1) $giveamt = 6900 + 1890;
                            else if($diff == 2) $giveamt = 1890 + 890 + 6900 + 1890;
                            else if($diff == 3) $giveamt = 690 + 290 + 1890 + 890 + 6900 + 1890;
                            else if($diff == 4) $giveamt = 180 + 90 + 690 + 290 + 1890 + 890 + 6900 + 1890;
                            else if($diff == 5) $giveamt = 60 + 30 + 180 + 90 + 690 + 290 + 1890 + 890 + 6900 + 1890;
                        }

                        if ($giveamt > 0) {
                            $nabikarana = $conn->prepare("UPDATE shonu_kaichila set motta = motta + ? where balakedara=?");
                            $nabikarana->bind_param("ds", $giveamt, $user_id);
                            $nabikarana->execute();
                        }
                        
                        $up_vip = $conn->prepare("UPDATE vip set expe = ?, lvl = ?, createdate = NOW() where userid=?");
                        $up_vip->bind_param("dis", $expe, $lvl, $user_id);
                        $up_vip->execute();
                    } else {
                        $expe = $bet_amount_local;
                        $lvl = 0;
                        $giveamt = 0;
                        
                        if($expe >= 3000 && $expe < 30000) { $lvl = 1; $giveamt = 60 + 30; }
                        else if($expe >= 30000 && $expe < 400000) { $lvl = 2; $giveamt = 60 + 30 + 180 + 90; }
                        else if($expe >= 400000 && $expe < 4000000) { $lvl = 3; $giveamt = 60 + 30 + 180 + 90 + 690 + 290; }
                        else if($expe >= 4000000 && $expe < 20000000) { $lvl = 4; $giveamt = 60 + 30 + 180 + 90 + 690 + 290 + 1890 + 890; }
                        else if($expe >= 20000000) { $lvl = 5; $giveamt = 60 + 30 + 180 + 90 + 690 + 290 + 1890 + 890 + 6900 + 1890; }
                        
                        $ins_vip = $conn->prepare("INSERT INTO vip (userid, expe, lvl, createdate) VALUES (?, ?, ?, NOW())");
                        $ins_vip->bind_param("sdi", $user_id, $expe, $lvl);
                        $ins_vip->execute();
                        
                        if ($giveamt > 0) {
                            $nabikarana = $conn->prepare("UPDATE shonu_kaichila set motta = motta + ? where balakedara=?");
                            $nabikarana->bind_param("ds", $giveamt, $user_id);
                            $nabikarana->execute();
                        }
                    }
                }
            } catch (Exception $e) {
                writeLog("Error updating VIP: " . $e->getMessage());
            }
        } else {
            writeLog("⚠️ game_bet_logs table doesn't exist - skipping bet logging");
        }
    } catch (Exception $e) {
        writeLog("⚠️ Error logging bet (table may not exist): " . $e->getMessage());
    } catch (Throwable $e) {
        writeLog("⚠️ Fatal error logging bet: " . $e->getMessage());
    }
}

writeLog("Sending success response to SeamlessEndpoints");

// Send success response using currency-specific key expected by SeamlessEndpoints
if ($local_ccy === 'PKR') {
    $response_data = [
        'code' => 0,
        'msg' => 'Success',
        'balance_pkr' => $new_balance_local
    ];
} elseif ($local_ccy === 'BDT') {
    $response_data = [
        'code' => 0,
        'msg' => 'Success',
        'balance_bdt' => $new_balance_local
    ];
} else { // INR default
    $response_data = [
        'code' => 0,
        'msg' => 'Success',
        'balance_inr' => $new_balance_local
    ];
}

writeLog("Response data: " . json_encode($response_data));

sendResponse($response_data);

// This should never be reached, but just in case
writeLog("❌ ERROR: Script continued after sendResponse!");
exit;
?>