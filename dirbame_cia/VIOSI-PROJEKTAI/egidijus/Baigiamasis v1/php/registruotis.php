
<?php
//print_r(  $_GET ); // test

require_once('../functions.php');

//$id = $_GET['id'];
$name = $_GET['name'];
$lastname = $_GET['lastname'];
$phone = $_GET['phone'];
$email = $_GET['email'];


createContact($name, $lastname, $email, $phone);
echo '<h2>'.'Gavome jusu zinute!'.'</h2>'; 

?>
<?php //header('Location: ../contacts.php'); exit; ?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Refresh" content="5;url=../contacts.php" />
    <title>Registered</title>
  </head>

<body>
  </body>
</html>