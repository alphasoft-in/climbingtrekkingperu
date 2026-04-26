<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Function to read .env file manually
function getEnvVar($key, $default = null) {
    $path = __DIR__ . '/.env';
    if (!file_exists($path)) {
        $path = __DIR__ . '/../.env';
    }
    
    if (file_exists($path)) {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            if (strpos($line, '=') !== false) {
                list($name, $value) = explode('=', $line, 2);
                if (trim($name) == $key) {
                    return trim($value);
                }
            }
        }
    }
    return $default;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        $data = $_POST;
    }

    $name = strip_tags(trim($data["name"] ?? ''));
    $email = filter_var(trim($data["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($data["subject"] ?? ''));
    $message = strip_tags(trim($data["message"] ?? ''));
    $captchaToken = $data["captchaToken"] ?? '';

    // Verify reCAPTCHA using the .env variable
    $secretKey = getEnvVar('RECAPTCHA_SECRET_KEY');
    
    if (!$secretKey) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error de configuración: Clave secreta no encontrada."]);
        exit;
    }
    
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$captchaToken);
    $responseData = json_decode($verifyResponse);

    if (!$responseData->success || ($responseData->score ?? 0) < 0.5) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Verificación de seguridad fallida. Por favor intente de nuevo."]);
        exit;
    }

    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor complete todos los campos correctamente."]);
        exit;
    }

    $recipient = "info@franpiscoadventure.com";
    $email_subject = "Consulta Web: $subject";
    
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $headers = "From: $recipient\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $email_subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "¡Gracias! Su mensaje ha sido enviado."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "No se pudo enviar el correo. Por favor intente más tarde."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
