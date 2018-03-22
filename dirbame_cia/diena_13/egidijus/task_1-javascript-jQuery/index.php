<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libs/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/custom.css">

    <title>JavaScript</title>
  </head>

  <body>

 	<h1>Mokomes</h1>
	  
<?php 
//	  $tekstas = "Nam quis suscipit mi, quis auctor ante. Donec nunc enim, consequat eget velit condimentum, porttitor euismod mauris. Donec nec dolor volutpat, varius diam ut, posuere tellus. Nunc quis velit ornare, lacinia massa ac, facilisis libero.";  //return array
//		$masyvas = explode(" ", $tekstas);
//	  echo $masyvas[0] . ". <br>";
//	  echo $masyvas[1] . ". <br>";
//	  echo $masyvas[2] . ". <br>";
	 
	  
//	  for($i=0; $i < count($masyvas); $i++) {
//		  echo $masyvas[$i] . ". <br>";
//	  }
	  
//	  foreach($masyvas as $stalcius) {
//		  echo $stalcius . '<br>';
//	  }
	  
//	  $masina = ['spalva'=>'raudona', 'makGreitis'=>220, 'kuras'=>'benzinas'];
////	  print_r($masina);
////	  var_dump($masina);
//	  foreach($masina as $stalcius) {
//		  echo $stalcius, "<br>";
//	  }
	  echo '<br>';
	   echo '<br>';
	  
	  $jonas = ['jonas','Jonauskas',15];
	  	$petras = ['Petras','Petraitis',15];
		$vardenis = ['Vardenis','Pavardenis',15];
	  	//matrix
	  	$matrica[0]=$jonas;
	  	$matrica[1]=$petras;
	  	$matrica[2]=$vardenis;
	  	
	  	$matrica[2][0]="Kestutis";
	  	$matrica[1][2]=22;
	  	
	  	
	  	echo 'Vardenio vardas pakeistas i yra: ' . $matrica[2][0];
	  	echo '<br>';
	  	echo 'Petro amzius yra: ' . $matrica[1][2];
?>
 









<!-- Mano JavaScript pats zemiausias (main.js) VISADA -->

<script src="libs/js/bootstrap.min.js"></script>
<script src="libs/js/jquery.min.js"></script>
<script src="js/main.js"></script>
  </body>
</html>