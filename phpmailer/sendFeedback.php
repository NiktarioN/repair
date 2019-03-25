<?php

require 'class.phpmailer.php';
require 'class.smtp.php';

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail= $_POST['userEmail'];

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP(); 
$mail->Host = 'smtp.mail.ru';  
$mail->SMTPAuth = true;
$mail->Username = 'nikita_givchik2@mail.ru';
$mail->Password = '10121997deep123';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('nikita_givchik2@mail.ru', 'Ремонт квартир "ОУМАЙ"');
$mail->addAddress('nikita_givchik@mail.ru');

$mail->isHTML(true); 

$mail->Subject = "Новая заявка с сайта";
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $userName . ' <br>
	Телефон: ' . $userPhone . '';
$mail->AltBody = 'Это альтернативный текст';

// Результат
if(!$mail->send()) {
    echo "Error";
} else {
    echo $userName;
}

?>