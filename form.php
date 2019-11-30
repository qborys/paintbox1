<?php
$to = "qborys@gmail.com";
$subject = $_POST['imie'];
$txt = $_POST['telefon'];
$headers = "From: pborychowski@gmail.com" . "\r\n" .
"Reply-To: kaoni.biuro@gmail.com";



mail($to,$subject,$txt,$headers);
?>
