<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libs/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Francois+One" rel="stylesheet">
    <link rel="stylesheet" href="css/custom.css">

    <title>Lotery</title>
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
	
<div class="bg-dark">
	
	<div class="container pt-5">
		<div class="row">
			<div class="col text-center">
				<h1 class="mb-3">Pet Name Lotery!</h1>
				<p>Give me your best name for the pet and you might win a free T-shirt</p>
					<form action="php/loteryreg.php" class="p-5">
						<input type="text" name="name" placeholder="Your name"><br><br>
						<input type="text" name="pet" placeholder="Pet name"><br><br>
						<input type="number" name="phone" placeholder="Phone Number"><br><br>
						<br>
						<input type="submit" value="Submit" class="mt-3 p-2">
					</form>
			</div>
		</div>
	</div>
		

<?php include("php/footer.php"); ?>