<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Contact Me | Edd's Photo</title>
	<?php
		include("head.php");
	?>
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<script type="text/javascript" src="libs/pace/pace.min.js"></script>
</head>

<body>
	<div id="all">
		<?php
			include("menu.php");
		?>
		<section class="single-page">
			<div class="section-content bg-pattern dark-screen">
				<div class="section-page container section-page-con99">
					<div class="row row-big">
						<div class="col-xxxl-6 col-xxl-6 col-lg-6 col-md-12 content-column">
							<h2 class="no-top-margin">Contacts</h2>
							<p>Sreet, Adress, City, Country</p>
							<p>Tel: (+111) 222 33 444</p>
							<p><a href="#">edds.photo@gmail.com</a></p>
							<div class="map-container">
								<div id="map-canvas">
								</div>
							</div>
						</div>
						<div class="col-xxxl-6 col-xxl-6 col-lg-6 col-md-12 content-column">
							<h2 class="no-top-margin">Write Message</h2>
							<form id="form-contact2" action="php/send_email.php" method="post" data-email-not-set-msg="Email is required" data-message-not-set-msg="Message is required" data-ajax-fail-msg="Request could not be sent, try later" data-success-msg="Email successfully sent.">
								<input type="text" name="name" placeholder="Name">
								<input type="text" name="email" placeholder="Email Address">
								<input type="text" name="phone" placeholder="Phone Number">
								<textarea name="message" placeholder="Message"></textarea>
								<p class="return-msg"></p>
								<div class="clearfix">
									<input class="submit-small pull-left" type="submit" value="Send Message">
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>

	<?php
		include("body.php");
	?>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	<script type="text/javascript" src="js/jquery.nicescroll.min.js"></script>
	<script type="text/javascript" src="js/custom.js"></script>
</body>
</html>
