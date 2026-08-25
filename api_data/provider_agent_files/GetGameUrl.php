<?php 
// Define access constant for gamesintrigrigrated.php
define('GAME_LAUNCHER_ACCESS', true);
error_reporting(E_ALL);
ini_set('display_errors', 1);

include_once "../../conn.php";
include_once "../../functions2.php";
// Games Integrated Transaction Logging

/*==============================================================================
  RESELLER CONFIGURATION - UPDATE THESE AFTER CREATING RESELLER IN ADMIN PANEL
==============================================================================*/

// Get these credentials from Admin Panel after creating your reseller
define('RESELLER_API_TOKEN', '8716a3e00a8fd31b572050ebe1ec8bb88813b92e2d5552e36bb6d3fead38e3ad');        // Enter your API token here
define('RESELLER_SECRET_KEY', 'e382945cb6df8035ab18ce2fb6a56cc4342d5e1bab528efcad966c273bcbc03b');      // Enter your secret key here  
define('RESELLER_PREFIX', 'jkvyntra9058');              // Enter your prefix here (e.g., 'reseller1234')

// Main API URL
define('VERSE_API_URL', 'https://devtools.asia/api/devtools.php');

/**
 * Centralized transaction logging function
 */
function logGameTransaction($conn, $userId, $vendorCode, $gameCode, $gameNameEn, $amount, $timestamp, $hadARGameBalanceBefore = false, $existingARGameBalanceBefore = 0) {
    try {
        $hasARGameBalance = $hadARGameBalanceBefore;
        $existingARGameBalance = $existingARGameBalanceBefore;
        
        // Debug logging
        error_log("logGameTransaction Debug:");
        error_log("  User ID: $userId");
        error_log("  Amount: $amount");
        error_log("  hadARGameBalanceBefore: " . ($hadARGameBalanceBefore ? 'true' : 'false'));
        error_log("  existingARGameBalanceBefore: $existingARGameBalanceBefore");
        error_log("  hasARGameBalance: " . ($hasARGameBalance ? 'true' : 'false'));
        
        // Only log if user had NO ARGame balance before transfer AND amount > 0
        if (!$hasARGameBalance && $amount > 0) {
            $serial = 'TRANS_' . uniqid();
            $insertQuery = "INSERT INTO game_moved_in_table (userkani, price, serial, remark, shonu) 
                           VALUES (?, ?, ?, 'Game In', ?)";
            $insertStmt = $conn->prepare($insertQuery);

            // ✅ NEW: handle prepare failure safely
            if (!$insertStmt) {
                error_log("❌ logGameTransaction prepare failed: " . $conn->error);
                return [
                    'success' => false,
                    'logged' => false,
                    'error' => $conn->error,
                    'message' => 'Prepare failed in logGameTransaction'
                ];
            }

            $insertStmt->bind_param("sdss", $userId, $amount, $serial, $timestamp);
            
            if ($insertStmt->execute()) {
                error_log("✅ Transaction logged: User $userId, Amount $amount, Vendor $vendorCode");
                return [
                    'success' => true,
                    'logged' => true,
                    'amount' => $amount,
                    'message' => 'Transaction logged successfully'
                ];
            } else {
                error_log("❌ Failed to log transaction: " . $insertStmt->error);
                return [
                    'success' => false,
                    'logged' => false,
                    'error' => $insertStmt->error,
                    'message' => 'Failed to log transaction'
                ];
            }
        } else {
            $reason = $hasARGameBalance ? 'User already has ARGame balance' : 'No amount to transfer';
            error_log("ℹ️ Transaction not logged: User $userId - $reason");
            return [
                'success' => true,
                'logged' => false,
                'amount' => $amount,
                'reason' => $reason,
                'existingARGameBalance' => $existingARGameBalance,
                'message' => 'Transaction not logged - ' . $reason
            ];
        }
        
    } catch (Exception $e) {
        error_log("❌ Transaction logging error: " . $e->getMessage());
        return [
            'success' => false,
            'logged' => false,
            'error' => $e->getMessage(),
            'message' => 'Transaction logging failed'
        ];
    }
}

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-API-Key');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
header('Access-Control-Allow-Origin: ' . $origin);
header('vary: Origin');

date_default_timezone_set("Asia/Kolkata");
$shnunc = date("Y-m-d H:i:s");

$res = [
    'code' => 11,
    'msg' => 'Method not allowed',
    'msgCode' => 12,
    'serviceNowTime' => $shnunc,
];

$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);

if (
    isset($shonupost['language']) && 
    isset($shonupost['random']) && 
    isset($shonupost['signature']) && 
    isset($shonupost['timestamp']) &&
    isset($shonupost['vendorCode']) &&
    isset($shonupost['gameCode'])
) {

    // RAW values from client
    $languageRaw   = $shonupost['language'];
    $randomRaw     = $shonupost['random'];
    $signatureRaw  = $shonupost['signature'];
    $vendorCodeRaw = $shonupost['vendorCode'];
    $gameCodeRaw   = $shonupost['gameCode'];
    $phonetypeRaw  = isset($shonupost['phonetype']) ? $shonupost['phonetype'] : '';
    $gameNameEnRaw = isset($shonupost['gameNameEn']) ? $shonupost['gameNameEn'] : '';

    // Signature string as per provider docs (DEBUG ONLY)
    $signString    = '{"gameCode":"'.$gameCodeRaw.'","language":'.$languageRaw.',"phonetype":'.$phonetypeRaw.',"random":"'.$randomRaw.'","vendorCode":'.$vendorCodeRaw.'}';
    $calcSignature = strtoupper(md5($signString));

    // Debug logs (agar log dekhna ho)
    // error_log("SIGN_DEBUG signString=" . $signString);
    // error_log("SIGN_DEBUG calc=" . $calcSignature . " | client=" . $signatureRaw);

    // Sanitize for DB
    $language   = htmlspecialchars(mysqli_real_escape_string($conn, $languageRaw));
    $random     = htmlspecialchars(mysqli_real_escape_string($conn, $randomRaw));
    $signature  = htmlspecialchars(mysqli_real_escape_string($conn, $signatureRaw));
    $vendorCode = htmlspecialchars(mysqli_real_escape_string($conn, $vendorCodeRaw));
    $gameCode   = htmlspecialchars(mysqli_real_escape_string($conn, $gameCodeRaw));
    $phonetype  = htmlspecialchars(mysqli_real_escape_string($conn, $phonetypeRaw));
    $gameNameEn = htmlspecialchars(mysqli_real_escape_string($conn, $gameNameEnRaw));

    // TEMP: Signature always treated as valid (NO BLOCK)
    $signatureIsValid = true;

    if ($signatureIsValid) {

        // Auth header check
        if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $res['code']    = 4;
            $res['msg']     = 'Authorization header missing';
            $res['msgCode'] = 2;
            http_response_code(401);
            echo json_encode($res);
            exit;
        }

        $bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
        $author = isset($bearer[1]) ? $bearer[1] : '';

        $is_jwt_valid = is_jwt_valid($author);
        $data_auth    = json_decode($is_jwt_valid, true);

        // JWT validation
        if ($data_auth && $data_auth['status'] === 'Success') {

            // Get user ID from JWT payload
            $user_id = $data_auth['payload']['id'];

            // ================== GLOBAL BETTING SETTING – IGNORED ==================
            // Sirf log kar rahe hain, block nahi karenge
            $settingQuery  = "SELECT allowbet FROM web_setting WHERE id = 1";
            $settingResult = $conn->query($settingQuery);
            if ($settingResult && $settingResult->num_rows > 0) {
                $settingRow = mysqli_fetch_assoc($settingResult);
                error_log("DEBUG allowbet from web_setting.id=1 => " . $settingRow['allowbet']);
            } else {
                error_log("web_setting row with id=1 not found or query failed.");
            }
            // ================== END GLOBAL BETTING SETTING ==================

            // User record
            $sesquery = ($vendorCode == 18) 
                ? "SELECT id, akshinak FROM shonu_subjects WHERE id = '$user_id'"
                : "SELECT mobile, akshinak FROM shonu_subjects WHERE id = '$user_id'";

            $sesresult = $conn->query($sesquery);
            $sesnum    = mysqli_num_rows($sesresult);
            $row       = $sesresult->fetch_assoc();                        

            if ($sesnum == 1) {

                // STEP 1: Transfer ALL balance from motta (main wallet) to argame_balances
                $stmtMain = $conn->prepare("SELECT motta FROM shonu_kaichila WHERE balakedara = ?");
                if (!$stmtMain) {
                    error_log("❌ stmtMain prepare failed: " . $conn->error);
                    $mainBalance = 0.0;
                } else {
                    $stmtMain->bind_param("s", $user_id);
                    $stmtMain->execute();
                    $resultMain = $stmtMain->get_result();
                    $mainBalance = 0.0;

                    if ($resultMain && $resultMain->num_rows > 0) {
                        $rowMain     = $resultMain->fetch_assoc();
                        $mainBalance = floatval($rowMain['motta']);
                    }
                }

                error_log("User {$user_id} main wallet (motta) balance: {$mainBalance} INR");

                // Check if user already has balance in argame_balances
                $checkStmt = $conn->prepare("SELECT balance FROM argame_balances WHERE user_id = ?");
                if (!$checkStmt) {
                    error_log("❌ checkStmt prepare failed: " . $conn->error);
                    $hadARGameBalanceBefore = false;
                    $existingARGameBalance  = 0;
                    $finalBalance           = $mainBalance;
                } else {
                    $checkStmt->bind_param("s", $user_id);
                    $checkStmt->execute();
                    $checkResult = $checkStmt->get_result();

                    $hadARGameBalanceBefore  = false;
                    $existingARGameBalance   = 0;
                    $finalBalance            = $mainBalance;

                    if ($checkResult && $checkResult->num_rows > 0) {
                        // User already has argame_balances, add to it
                        $hadARGameBalanceBefore = true;
                        $balRow                 = $checkResult->fetch_assoc();
                        $existingARGameBalance  = floatval($balRow['balance']);
                        $finalBalance           = $existingARGameBalance + $mainBalance;

                        error_log("User already has argame_balances: {$existingARGameBalance} INR. Adding {$mainBalance} INR. Final: {$finalBalance} INR");
                    }
                }

                // Update or insert argame_balances
                if ($hadARGameBalanceBefore) {
                    $updateStmt = $conn->prepare("UPDATE argame_balances SET balance = ?, updated_at = NOW() WHERE user_id = ?");
                    if (!$updateStmt) {
                        error_log("❌ updateStmt prepare failed: " . $conn->error);
                    } else {
                        $updateStmt->bind_param("ds", $finalBalance, $user_id);
                        $updateStmt->execute();
                    }
                } else {
                    $insertStmt2 = $conn->prepare("INSERT INTO argame_balances (user_id, balance, updated_at) VALUES (?, ?, NOW())");
                    if (!$insertStmt2) {
                        error_log("❌ insertStmt2 prepare failed: " . $conn->error);
                    } else {
                        $insertStmt2->bind_param("sd", $user_id, $mainBalance);
                        $insertStmt2->execute();
                    }
                }

                // Deduct from main wallet (set motta to 0)
                if ($mainBalance > 0) {
                    $updateMainWallet = $conn->prepare("UPDATE shonu_kaichila SET motta = 0 WHERE balakedara = ?");
                    if (!$updateMainWallet) {
                        error_log("❌ updateMainWallet prepare failed: " . $conn->error);
                    } else {
                        $updateMainWallet->bind_param("s", $user_id);
                        $updateMainWallet->execute();
                        error_log("Main wallet (motta) set to 0 for user {$user_id}");
                    }
                }

                // Log transaction if needed
                if (!$hadARGameBalanceBefore && $mainBalance > 0) {
                    logGameTransaction(
                        $conn,
                        $user_id,
                        $vendorCode,
                        $gameCode,
                        $gameNameEn,
                        $mainBalance,
                        $shnunc,
                        $hadARGameBalanceBefore,
                        $existingARGameBalance
                    );
                }

                // STEP 2: Call HuidoVerse API with reseller credentials
                if (RESELLER_API_TOKEN === 'YOUR_RESELLER_API_TOKEN' || empty(RESELLER_API_TOKEN)) {
                    error_log("ERROR: Reseller credentials not configured. Update reseller credentials at top of this file.");
                    $res['code']    = 8;
                    $res['msg']     = 'API configuration error. Please update reseller credentials in GetGameUrl.php';
                    $res['msgCode'] = 8;
                    http_response_code(500);
                    echo json_encode($res);
                    exit;
                }

                $api_payload = [
                    'userId'      => $user_id,
                    'gameCode'    => $gameCode,
                    'vendorCode'  => $vendorCode,
                    'userBalance' => $finalBalance,
                    'language'    => $language,
                    'phonetype'   => $phonetype,
                    'returnUrl'   => 'https://jkvyntra.xyz'
                ];

                error_log("Calling HuidoVerse API: " . VERSE_API_URL);
                error_log("Using reseller prefix: " . RESELLER_PREFIX);
                error_log("User ID: {$user_id}, Balance: {$finalBalance} INR");

                $ch = curl_init(VERSE_API_URL);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($api_payload));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HTTPHEADER, [
                    'Content-Type: application/json',
                    'X-API-Token: ' . RESELLER_API_TOKEN,
                    'X-Secret-Key: ' . RESELLER_SECRET_KEY
                ]);
                curl_setopt($ch, CURLOPT_TIMEOUT, 30);
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

                $api_response  = curl_exec($ch);
                $api_http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                $curl_error    = curl_error($ch);
                curl_close($ch);

                if ($curl_error) {
                    error_log("API call error: " . $curl_error);
                    $res['code']    = 8;
                    $res['msg']     = 'Failed to connect to game provider';
                    $res['msgCode'] = 8;
                } else {
                    $api_result = json_decode($api_response, true);
                    error_log("API response: " . $api_response);

                    if ($api_result && isset($api_result['code']) && $api_result['code'] === 0) {
                        $res['code'] = 0;
                        $res['msg']  = 'Game launched successfully';
                        $res['data'] = [
                            'url'        => $api_result['data']['url'],
                            'returnType' => 'game_url'
                        ];
                    } else {
                        $res['code']    = 8;
                        $res['msg']     = ($api_result['msg'] ?? 'Failed to launch game') . " | HTTP: $api_http_code | Debug: " . substr($api_response, 0, 200);
                        $res['msgCode'] = 8;
                        if (isset($api_result['upstream_response'])) {
                            $res['upstream'] = $api_result['upstream_response'];
                        }
                    }
                }

            } else {
                $res['code']    = 4;
                $res['msg']     = 'No operation permission';
                $res['msgCode'] = 2;
                http_response_code(401);
                echo json_encode($res);
                exit;
            }

        } else {
            $res['code']    = 4;
            $res['msg']     = 'No operation permission';
            $res['msgCode'] = 2;
            http_response_code(401);
            echo json_encode($res);
            exit;
        }

    } else {
        $res['code']    = 5;
        $res['msg']     = 'Wrong signature';
        $res['msgCode'] = 3;
        http_response_code(200);
        echo json_encode($res);
        exit;
    }

} else {
    $res['code']    = 7;
    $res['msg']     = 'Param is Invalid';
    $res['msgCode'] = 6;
    http_response_code(200);
    echo json_encode($res);
    exit;
}

// Send response
http_response_code(200);
echo json_encode($res);
?>
