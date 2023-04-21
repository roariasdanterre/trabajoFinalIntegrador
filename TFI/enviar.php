<?php
// Obtiene los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Envía un correo electrónico con los datos del formulario
$destinatario = 'correo_destino@example.com';
$asunto = 'Formulario de contacto';
$mensaje_correo = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nMensaje:\n$mensaje";
$headers = 'From: correo_origen@example.com' . "\r\n" .
    'Reply-To: correo_origen@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($