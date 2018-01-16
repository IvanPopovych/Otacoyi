<?php
//Принимаем постовые данные
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$form=$_POST['form'];

//Тут указываем на какой ящик посылать письмо
$to = "popovych@blinds.kl.com.ua";
//Далее идет тема и само сообщение
$subject = "Заявка на майстер-клас";
$message = "Звідки прийшла форма:"
	.htmlspecialchars($form)
	."<br /> Ім'я:"
	.htmlspecialchars($name)
	."<br /> Телефон: "
	.htmlspecialchars($phone)
	."<br /> Пошта: "
	.htmlspecialchars($email);
$headers = "From: islamov.ru <no-reply@mysite.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location: thanks.html');
exit;
?>
