<?php

require 'PHPMailer/PHPMailerAutoload.php';

$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$subject    = @trim(stripslashes($_POST['subject'])); 
$message    = @trim(stripslashes($_POST['message'])); 
$to   		= 'fabio_cianato@hotmail.com';//replace with your email
$telefone = @trim(stripcslashes($_POST['phone']))
//$to   		= 'nathan@level5jr.com.br';//replace with your email

$mail = new PHPMailer;

$mail->isSMTP();
$mail->SMTPDebug = 2;

$mail->Debugoutput = 'html';

$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "formulario@level5jr.com.br";
$mail->Password = "|Tq2:5K21jTP";


$mail->setFrom('form.fabiofaleiro@gmail.com', 'Site Fábio Faleiro');
$mail->AddReplyTo($from, $name);
$mail->addAddress($to, 'Level5');
$mail->Subject = $subject . ' - Telefone: ' . $telefone;
$mail->Body = $message;

if (!$mail->send())
    echo "Mailer Error: " . $mail->ErrorInfo;
else 
	echo "Message sent!";
die;
