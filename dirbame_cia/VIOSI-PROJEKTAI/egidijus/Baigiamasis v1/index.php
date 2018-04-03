<?php include("php/index.php"); ?>

<body>
	<div class="container-fluid">
	<?php include("php/navbar.php"); ?>

<div class="container-fluid shadow-bottom z-10 pos-relative">
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
		<a href="2d-stuff.php"><img src="pics/arc.jpg" alt="Los Angeles" class="img-fluid"></a>
      <div class="carousel-caption opacy">
        <h3>VanShade Studios</h3>
        <p>2D Digital Sketches & Paintings</p>
      </div>   
    </div>
    <div class="carousel-item">
		<a href="3d-stuff.php"><img src="pics/spacearc.jpg" alt="Chicago" class="img-fluid"></a>
      <div class="carousel-caption">
        <h3>3D Models and Particle effects</h3>
        <p>Primed and ready to GO! Aliquam in lacus ultricies, varius libero a, varius libero. Quisque tincidunt nisl ut magna accumsan, nec pharetra nulla dignissim. </p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>
		
<div class="container show-hidden bg-dark z-5 pos-relative shadow-bottom rounded-bottom">
	<div class="row text-center">
		<div class="col mt-5">
			<h1><u>Studio News</u></h1>
		</div>
	</div>
	<div class="row p-5">
		<div class="col">
			<h3>Custom T-shirt</h3>
			<p>Currently I'm working on: Integer vestibulum quam ultricies magna vehicula semper. Ut nec dolor purus. Morbi quis ligula ac est tincidunt euismod. Vestibulum a neque a nulla ornare dignissim. Aenean non turpis a elit posuere commodo. Donec varius felis vel mattis tincidunt. Integer mollis dignissim imperdiet.</p>
		</div>
		<div class="col text-right">
			<h3>Work in Progress!!!</h3>
			<p>Integer vestibulum quam ultricies magna vehicula semper. Ut nec dolor purus. Morbi quis ligula ac est tincidunt euismod. Vestibulum a neque a nulla ornare dignissim. Aenean non turpis a elit posuere commodo. Donec varius felis vel mattis tincidunt.</p>
		</div>
	</div>
</div>

<br>
	
<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-6 text-center">
			<a href="https://www.pinterest.com/AicaBunnisher/">
			<h2 class="">Public Album:</h2>
			<img class="" src="pics/pin-r.png" height="60px"></a>
		</div>
		<div class="col-6 text-center">
			<a href="https://discord.gg/p5u9nVZ">
			<h2 class="">Open Community:</h2>
          	<img class="" src="pics/discord-w.png" height="40px"></a>
    	</div>	
	</div>
</div>

<br>
	
<?php include("php/footer.php"); ?>