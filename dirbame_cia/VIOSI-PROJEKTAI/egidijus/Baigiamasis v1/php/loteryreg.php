
<?php
//print_r(  $_GET ); // test

require_once('../functions.php');

//$id = $_GET['id'];
$name = $_GET['name'];
$pet = $_GET['pet'];
$phone = $_GET['phone'];


createContact2($name, $pet, $phone);
echo '<h2>'.'Gavome jusu zinute!'.'</h2>'; 

?>
<?php //header('Location: ../contacts.php'); exit; ?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Refresh" content="5;url=../lotery.php" />
    <title>Registered</title>
  </head>

<body>
  </body>
</html>

Prisijungete sekmingai 
EROROR: nepavyko uzregistruoti gydytojo.Duplicate entry '0' for key 'PRIMARY'
Gavome jusu zinute!