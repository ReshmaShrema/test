<?php
include("connect.html");
require 'phpmailer/PHPMailerAutoload.html';
$mail = new PHPMailer;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';


$mail->Username = 'neethss00@gmail.com';
$mail->Password = 'neethuuvavaa';

$id = $_GET['id'];
echo "$id";
$query = "SELECT name,email_id FROM user where user_id ='$userid'";
$r = mysqli_query($conn, $query);
if (mysqli_num_rows($r) > 0) {
    $ro = mysqli_fetch_assoc($r);
    $receivermail = $ro["email_id"];
    $receivername = $ro["name"];
}


$mail->setFrom('neethss00@gmail.com', 'MCA,CET Library');
$mail->addAddress('$receivermail', '$receivername');
