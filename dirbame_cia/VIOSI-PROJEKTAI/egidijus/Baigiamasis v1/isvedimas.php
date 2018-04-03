<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libs/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Francois+One" rel="stylesheet">
    <link rel="stylesheet" href="css/custom.css">

    <title>Live</title>
  </head>

<body class="overlay">
 <?php include("php/navbar.php"); ?>
	<header>
		<div class="container-fluid footer">
			<div class="row">
				<div class="col p-5 text-center">
					<br>
				</div>
			</div>
		</div>
	</header>
<div class="container-fluid bg-dark pt-5">
		<div class="row justify-content-center align-items-center text-center">
			<div class="col-10 mb-5">
				
			<?php
				require_once('functions.php');
         	?>
        <!-- ==================================== -->
        <ul>
            <li>
                <?php
                    $manoContact = getContact(37); // grizo array
                    echo $manoContact['name'] . " " . $manoContact['lastname'];
                 ?>
            </li>
            <li>
                <?php
                    $manoContact = getContact(38); // grizo array
                    echo $manoContact['name'] . " " . $manoContact['lastname'];
                 ?>
            </li>
            <li>
                <?php
                    $manoContact = getContact(39); // grizo array
                    echo $manoContact['name'] . " " . $manoContact['lastname'];
                 ?>
            </li>
        </ul>
        <!-- =================ARBA SU FOR CIKLU ================ -->
</div>
	

	

<?php include("php/footer.php"); ?>