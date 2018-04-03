<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Gallery | Edd's Photo</title>
	<?php
	include("head.php");
	?>
	<link rel="stylesheet" href="css/main.css" type="text/css">
</head>

<body>
	<div id="all">
		<?php
		include("menu.php");
		?>
		<section class="single-page">
			<div class="section-content bg-pattern dark-screen">
				<div class="container">
					<div class="clearfix">
						<h1 class="page-top-heading pull-left">Gellery</h1>
						<ul class="pull-right filter-list-alt">
							<li><a href="#">People</a></li>
							<li><a href="#">Beauty</a></li>
							<li><a href="#">Lifestyle</a></li>
							<li><a href="#">Models</a></li>
							<li><a href="#">Couples</a></li>
							<li><a href="#">Nature</a></li>
						</ul>
					</div>
					<div id="portfolio3" class="portfolio-layout5 row row-clean">
						<article class="col-xxxl-12-5 col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item filter-people">
							<?php
							require_once('images_functions.php');
							?>
							<div class="portfolio-img">
								<img alt="image" src="images/gallery/<?php echo $images['file_name'];?>">
								<div class="portfolio-img-detail">
									<div class="portfolio-img-detail-inner">
										<div class="portfolio-img-detail-content">
											Lorem ipsum dolor sit amet
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>

	<?php
	include("body.php");
	?>
</body>
</html>
