<?php 

use phpmailer\PHPMailer;
use phpmailer\Exception;

include("phpmailer/Exception.php"); 
include("phpmailer/PHPMailer.php");
include("phpmailer/SMTP.php");

$errors = '';
$myemail = 'harineelapala@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) ||
	empty($_POST['number']) ||   
	empty($_POST['messege']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$number = $_POST['number']; 
$messege = $_POST['messege']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message from kragycoders.com. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n number: $number \n messege: $messege"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.html');
}

?>
<!DOCTYPE HTML> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
