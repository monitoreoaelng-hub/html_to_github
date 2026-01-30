<?php
// Configuración de seguridad
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Verificar que sea una petición POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Recibir y sanitizar datos del formulario
$nombre = isset($_POST['nombre']) ? strip_tags(trim($_POST['nombre'])) : '';
$apellido = isset($_POST['apellido']) ? strip_tags(trim($_POST['apellido'])) : '';
$cargo = isset($_POST['cargo']) ? strip_tags(trim($_POST['cargo'])) : '';
$empresa = isset($_POST['empresa']) ? strip_tags(trim($_POST['empresa'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$telefono = isset($_POST['telefono']) ? strip_tags(trim($_POST['telefono'])) : '';
$mensaje = isset($_POST['mensaje']) ? strip_tags(trim($_POST['mensaje'])) : '';

// Validar campos requeridos
if (empty($nombre) || empty($apellido) || empty($cargo) || empty($empresa) || empty($email) || empty($telefono) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email no válido']);
    exit;
}

// Configuración del correo
$para = 'juanjosepardo.p@gmail.com';
$asunto = 'Nuevo mensaje de contacto - AELNG Solutions';

// Crear el contenido del email en HTML
$contenido_html = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #235baf; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 30px; margin-top: 0; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #235baf; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { margin-top: 5px; padding: 12px; background-color: white; border-left: 3px solid #235baf; border-radius: 4px; }
        .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; padding-top: 20px; border-top: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2 style='margin:0; font-size: 24px;'>Nuevo Mensaje de Contacto</h2>
            <p style='margin:5px 0 0 0; font-size: 14px; opacity: 0.9;'>AELNG Solutions</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nombre Completo:</div>
                <div class='value'>" . htmlspecialchars($nombre . ' ' . $apellido) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Cargo:</div>
                <div class='value'>" . htmlspecialchars($cargo) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Empresa:</div>
                <div class='value'>" . htmlspecialchars($empresa) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #235baf; text-decoration: none;'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Teléfono:</div>
                <div class='value'><a href='tel:" . htmlspecialchars($telefono) . "' style='color: #235baf; text-decoration: none;'>" . htmlspecialchars($telefono) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Mensaje:</div>
                <div class='value'>" . nl2br(htmlspecialchars($mensaje)) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p style='margin: 5px 0;'>Este correo fue enviado desde el formulario de contacto de</p>
            <p style='margin: 5px 0;'><strong>www.aelngsolutions.com</strong></p>
            <p style='margin: 15px 0 5px 0; color: #999;'>Fecha: " . date('d/m/Y H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Headers del correo
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: AELNG Web <noreply@aelngsolutions.com>" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo
if (mail($para, $asunto, $contenido_html, $headers)) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
    ]);
}
?>
