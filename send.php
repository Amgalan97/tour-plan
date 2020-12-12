<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST["email"];

// Формирование самого письма
if ($name and $phone and $email) {
  $title = "Новое обращение Best Tour Plan из модального окна";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Отправки сообщения из блока newsletter
if ($email) {
  $title = "Подписка на новости Best Tour Plan";
  $body = "
    <h2>Подписка на новости</h2>
    <b>mail:</b> $email<br>
  ";
}
// Отправки сообщения из блока footer
else {
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'a.togosheev97@mail.ru'; // Логин на почте
    $mail->Password   = 'amchik9721'; // Пароль на почте
    $mail->Port       = 465;
    $mail->setFrom('a.togosheev97@mail.ru', 'Амгалан Тогошеев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('amgalan693@gmail.com');


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Перенаправления на нужные страницы
if ($name and $phone and $email) {
  header('Location: thankyou.html');
}

if ($email) {
  header('Location: subscribe-thankyou.html');
}

else {
  header('Location: thankyou.html');
}