<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libs/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Francois+One" rel="stylesheet">
    <link rel="stylesheet" href="css/custom.css">

    <title>Contact</title>
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
				<img src="pics/Dragon01.svg" width="20%" style="color:aliceblue">
			</div>
		</div>
		<div class="row">
			<div class="col text-center">
				<h1 class="mb-3"> You can contanct me: </h1>
					<form action="php/registruotis.php" class="">
						<input type="text" name="name" placeholder="First name"><br><br>
						<input type="text" name="lastname" placeholder="Last name"><br><br>
						<input type="email" name="email" placeholder="@ Email"><br><br>
						<input type="number" name="phone" placeholder="Phone number"><br><br>
						<textarea name="message" rows="5" cols="30" placeholder="Your msg"></textarea>
						<br>
						<input type="submit" value="Submit" class="mt-3 p-2">
					</form>
			</div>
		</div>
	</div>
		<div class="container-fluid mt-5">
			<div class="row">
				<div class="col text-center">
					<div class="row">
						<div class="col">
							<h1>You can find me on:</h1>
							<p>Google Maps</p>
						</div>
					</div>
					<div class="row mt-5 mb-5">
						<div class="col">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2292.789205691091!2d23.879864876013166!3d54.92417105543478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1522245262012" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>

<?php include("php/footer.php"); ?>