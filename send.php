<?php 
    $destino="juliana.leon.s@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $list = $_POST["list"];
    $message = $_POST["message"];
    $content = "Nombre: " . $name . "\nCorreo: " . $email. "\nTeléfono: " . $phone. "\nTema de interés: " . $list. "\nMensaje: " . $message;
    mail($destino,"Contacto Empresas Digitales", $content);
    header("Location:gracias.html");

?>