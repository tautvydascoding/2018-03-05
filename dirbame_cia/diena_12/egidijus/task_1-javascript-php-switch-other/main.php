<body>

<h1>Miskas2</h1>

<?php
  $txt = 'Sveikas Pasauli';
  $x = 8;
  $y = 6.5;
  $z = 5 + 5;
  $h = $x + $y;
  $f = "Mama ejo"." i parduotuve";

  echo $txt;
  echo "<br>";
  echo $x;
  echo "<br>";
  echo $y;
  echo "<br>";
  echo $z;
  echo "<br>";
  echo $h;
  echo "<br>";
  echo $f;

  echo "<div class='jumbotron text-center'>Sveikas Pasauli</div>"; 

  echo "<h2 class='text-center'>Footers $h </h2>";
?>
<div class="jumbotron text-center">
  // UZDUOTIS  "Switch" <br>
  // paduoti varda ir Jeigu jis lygus:<br>
  // "audi" - atspausdinti "Susimastykite apie variklio prieziura"<br>
  // "BMW" - atspausdinti "Susimastykite apie greiti ir vairavimo kultura"<br>
  // "opel" - atspausdinti "Susimastykite apie naujus priedus"<br>
</div>

<?php
echo "<div class='jumbotron text-center'>";
  $vardas = 'audi';
  $vardas = trim($vardas);  // pasaliname " ", tab ir kitus spec simbolius
  $vardas = strtolower($vardas); //paverciam mzosiomis raidemis

  switch(strtolower(trim($vardas))) {
  // switch($vardas) {
    case 'audi':
            echo "11Susimastykite apie variklio prieziura";
      break;
    case 'audi':
            echo "22Susimastykite apie variklio prieziura";
      break;

    case 'bmw':
            echo "Susimastykite apie vairavimo kultura";
      break;
    case 'opel':
            echo "Susimastykite apie variklio prieziura";
      break;
    default: 
            echo "Tokiai: $vardas markei patarimu neturim";
    break;
  }
echo "</div>";
?>

<section class="jumbotron text-center">
  <p>Turinys esantis atskiram php faile</p>
</section>