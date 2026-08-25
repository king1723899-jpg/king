<?php
declare(strict_types=1);

session_start();
date_default_timezone_set('Asia/Kolkata');
header('Content-Type: application/json; charset=utf-8');

function json_out(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function now_india_sql_datetime(): string
{
    return date('Y-m-d H:i:s');
}

function first_text(...$values): string
{
    foreach ($values as $value) {
        $text = trim((string)$value);
        if ($text !== '') {
            return $text;
        }
    }
    return '';
}

function env_bool(string $name, bool $fallback = false): bool
{
    $value = getenv($name);
    if ($value === false || $value === null || $value === '') {
        return $fallback;
    }
    $raw = strtolower(trim((string)$value));
    return in_array($raw, ['1', 'true', 'yes', 'on'], true);
}

function get_bearer_token(): string
{
    $header = (string)($_SERVER['HTTP_AUTHORIZATION'] ?? '');
    if ($header === '' && function_exists('getallheaders')) {
        $headers = getallheaders();
        $header = (string)($headers['Authorization'] ?? $headers['authorization'] ?? '');
    }
    if (stripos($header, 'Bearer ') === 0) {
        return trim(substr($header, 7));
    }
    return '';
}

function decode_jwt_payload(string $jwt): array
{
    $parts = explode('.', trim($jwt));
    if (count($parts) < 2) {
        return [];
    }
    $payloadRaw = strtr($parts[1], '-_', '+/');
    $padding = strlen($payloadRaw) % 4;
    if ($padding > 0) {
        $payloadRaw .= str_repeat('=', 4 - $padding);
    }
    $json = base64_decode($payloadRaw, true);
    if ($json === false) {
        return [];
    }
    $decoded = json_decode($json, true);
    return is_array($decoded) ? $decoded : [];
}

function resolve_player_id(): string
{
    $sessionUid = trim((string)($_SESSION['uid'] ?? ''));
    if ($sessionUid !== '') {
        return $sessionUid;
    }

    $token = get_bearer_token();
    if ($token === '') {
        return '';
    }

    $payload = decode_jwt_payload($token);
    foreach (['userId', 'id', 'uid', 'sub'] as $key) {
        if (array_key_exists($key, $payload)) {
            $value = trim((string)$payload[$key]);
            if ($value !== '') {
                return $value;
            }
        }
    }

    return '';
}

function read_provider_settings(): array
{
    $path = __DIR__ . DIRECTORY_SEPARATOR . 'data_store' . DIRECTORY_SEPARATOR . 'provider_api_settings.json';
    if (!is_file($path)) {
        return [];
    }
    $raw = file_get_contents($path);
    if (!is_string($raw) || trim($raw) === '') {
        return [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function extract_launch_url(array $payload): string
{
    $candidates = [
        $payload['data']['url'] ?? null,
        $payload['data']['launchUrl'] ?? null,
        $payload['data']['gameUrl'] ?? null,
        $payload['url'] ?? null,
        $payload['launchUrl'] ?? null,
        $payload['gameUrl'] ?? null,
    ];
    foreach ($candidates as $candidate) {
        $url = trim((string)$candidate);
        if ($url !== '' && preg_match('/^https?:\/\//i', $url) === 1) {
            return $url;
        }
    }
    return '';
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    json_out(405, [
        'code' => 11,
        'msg' => 'Method not allowed',
        'msgCode' => 12,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$playerId = resolve_player_id();
if ($playerId === '') {
    json_out(401, [
        'code' => 4,
        'msg' => 'Login required',
        'msgCode' => 2,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput ?: '{}', true);
if (!is_array($input)) {
    json_out(400, [
        'code' => 7,
        'msg' => 'Invalid JSON payload',
        'msgCode' => 6,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$gameCode = trim((string)($input['gameCode'] ?? $input['identifier'] ?? $input['gameId'] ?? ''));
if ($gameCode === '') {
    json_out(400, [
        'code' => 7,
        'msg' => 'gameCode is required',
        'msgCode' => 6,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$vendorCode = max(1, (int)($input['vendorCode'] ?? $input['providerCode'] ?? 18));
$timestamp = (int)($input['timestamp'] ?? round(microtime(true) * 1000));
if ($timestamp <= 0) {
    $timestamp = (int)round(microtime(true) * 1000);
}

$random = trim((string)($input['random'] ?? ''));
if ($random === '') {
    try {
        $random = bin2hex(random_bytes(10));
    } catch (Throwable $e) {
        $random = (string)mt_rand(100000000, 999999999);
    }
}

$settings = read_provider_settings();
$apiEnabled = isset($settings['enabled']) ? (bool)$settings['enabled'] : true;
if (!$apiEnabled) {
    json_out(503, [
        'code' => 8,
        'msg' => 'Provider API is disabled',
        'msgCode' => 8,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$launchApi = first_text($settings['apiUrl'] ?? '', getenv('PROVIDER_LAUNCH_API_URL'), 'https://oxentech.asia/api/devtools.php');
$agent = first_text($settings['providerAgent'] ?? '', getenv('PROVIDER_AGENT'), 'MR_Ko3578');
$token = first_text($settings['providerToken'] ?? '', getenv('PROVIDER_TOKEN'), '72e53554fbe46f0be77e51451a71c32f73261e477952587e2470b105df4ea3fc');
$secret = first_text($settings['providerSecret'] ?? '', getenv('PROVIDER_SECRET'), '772a385d0636dbc963606729c1a0b75b68777f7b202708c9e2d053d1c71496af');
$signatureAlgorithm = strtolower(first_text($settings['signatureAlgorithm'] ?? '', getenv('PROVIDER_SIGNATURE_ALGO'), 'sha256'));
$signatureUppercase = isset($settings['signatureUppercase'])
    ? (bool)$settings['signatureUppercase']
    : env_bool('PROVIDER_SIGNATURE_UPPERCASE', false);

if (!in_array($signatureAlgorithm, ['sha256', 'sha512', 'sha1', 'md5'], true)) {
    $signatureAlgorithm = 'sha256';
}

if ($launchApi === '' || $agent === '' || $token === '' || $secret === '') {
    json_out(500, [
        'code' => 8,
        'msg' => 'Provider settings missing. Configure apiUrl/providerAgent/providerToken/providerSecret.',
        'msgCode' => 8,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

$signInput = $agent . $playerId . $gameCode . $vendorCode . $timestamp . $random . $secret;
$sign = hash($signatureAlgorithm, $signInput);
if ($signatureUppercase) {
    $sign = strtoupper($sign);
}

$payload = [
    'agent' => $agent,
    'token' => $token,
    'playerId' => $playerId,
    'vendorCode' => $vendorCode,
    'gameCode' => $gameCode,
    'timestamp' => $timestamp,
    'random' => $random,
    'sign' => $sign,
];

$ch = curl_init($launchApi);
if ($ch === false) {
    json_out(500, [
        'code' => 8,
        'msg' => 'Unable to initialize cURL',
        'msgCode' => 8,
        'serviceNowTime' => now_india_sql_datetime(),
    ]);
}

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false || $curlError !== '') {
    json_out(502, [
        'code' => 8,
        'msg' => 'Provider request failed',
        'msgCode' => 8,
        'serviceNowTime' => now_india_sql_datetime(),
        'data' => ['error' => $curlError],
    ]);
}

$decoded = json_decode((string)$response, true);
if (is_array($decoded)) {
    $launchUrl = extract_launch_url($decoded);
    $providerMsg = first_text($decoded['msg'] ?? '', $decoded['message'] ?? '', $decoded['error'] ?? '');
    $providerCode = (int)($decoded['code'] ?? ($httpCode >= 200 && $httpCode < 300 ? 0 : 8));
    $providerMsgCode = (int)($decoded['msgCode'] ?? ($providerCode === 0 ? 0 : 8));

    if ($launchUrl !== '') {
        json_out(200, [
            'code' => 0,
            'msg' => 'Game launched successfully',
            'msgCode' => 0,
            'serviceNowTime' => now_india_sql_datetime(),
            'data' => [
                'url' => $launchUrl,
                'returnType' => 'game_url',
                'providerResponse' => $decoded,
            ],
        ]);
    }

    json_out($httpCode >= 400 ? $httpCode : 502, [
        'code' => $providerCode > 0 ? $providerCode : 8,
        'msg' => $providerMsg !== '' ? $providerMsg : 'Failed to launch game',
        'msgCode' => $providerMsgCode > 0 ? $providerMsgCode : 8,
        'serviceNowTime' => now_india_sql_datetime(),
        'data' => [
            'providerResponse' => $decoded,
        ],
    ]);
}

$raw = trim((string)$response);
if ($raw !== '' && preg_match('/^https?:\/\//i', $raw) === 1) {
    json_out(200, [
        'code' => 0,
        'msg' => 'Game launched successfully',
        'msgCode' => 0,
        'serviceNowTime' => now_india_sql_datetime(),
        'data' => [
            'url' => $raw,
            'returnType' => 'game_url',
        ],
    ]);
}

json_out($httpCode >= 400 ? $httpCode : 502, [
    'code' => 8,
    'msg' => 'Provider returned invalid response',
    'msgCode' => 8,
    'serviceNowTime' => now_india_sql_datetime(),
    'data' => [
        'raw' => $raw,
    ],
]);