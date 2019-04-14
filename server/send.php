<?php
$nombre = $_POST["nombre"];
$email =  $_POST["email"];
$edad = $_POST["edad"];
$talla = $_POST["talla"];
$peso = $_POST["peso"];
$distrito = $_POST["distrito"];
$diagnostico = $_POST["diagnostico"];
$consulta = $_POST["consulta"];

echo $nombre." -- ".$email." -- ".$edad." -- ".$talla." -- ".$peso." -- ".$distrito." -- ".$diagnostico." -- ".$consulta;

/*$to = "ingridkatherine19@gmail.com";
$subject = "Asunto del email";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
$message = "
<html>
<head>
<title>HTML</title>
</head>
<body>
<p><b>Nombre: </b>".$nombre."</p>
<p><b>Email: </b>".$email."</p>
<p><b>Telefono: </b>".$telefono."</p>
<p><b>Mensaje: </b>".$mensaje."</p>
</body>
</html>";
 
mail($to, $subject, $message, $headers);
echo json_encode(array(
	'state' => 1,
	));*/

?>


