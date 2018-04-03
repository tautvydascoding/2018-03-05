<?php
include ("./head.php");
include ("./uzklausa.php");

session_start();

if (!isset($_SESSION['prisijungta']) || $_SESSION['prisijungta']==0){
  header('Location: admin-login.php');
}

$suniukas=getSuniukas($_GET ['suniukas']);
$id=$_GET['suniukas'];

if ($_POST) {
  $nr=$_POST['nr'];
  $suniuko_vardas=$_POST['suniuko_vardas'];
  $vardas=$_POST['vardas'];
  $telefonas=$_POST['telefonas'];
  $rezervuotas=$_POST['rezervuotas'];
  updateSuniukas($id, $nr, $suniuko_vardas, $vardas, $telefonas, $rezervuotas);
}

if(!isset($suniukas['nr'])){
    $suniukas['nr'] = '';
}

if(!isset($suniukas['suniuko_vardas'])){
    $suniukas['suniuko_vardas'] = '';
}

if(!isset($suniukas['vardas'])){
    $suniukas['vardas'] = '';
}

if(!isset($suniukas['telefonas'])){
    $suniukas['telefonas'] = '';
}

if(!isset($suniukas['rezervuotas'])){
    $suniukas['rezervuotas'] = '';
}

?>

<h3 class= "m-3">Rezervacijos duomenys</h3>

<div class="row">

<form class="col-4 ml-3" action="admin-form.php?suniukas=<?php echo $id; ?>" method="post">
    Šuniuko numeris  <br>
    <input type="number" name="nr" min="10" max="60" value="<?php echo $suniukas['nr']; ?>">  <br> <br>
    Šuniuko vardas <br>  <input type="text" name="suniuko_vardas" value="<?php echo $suniukas['suniuko_vardas']; ?>"> <br> <br>
    Vardas <br>  <input type="text" name="vardas" value="<?php echo $suniukas['vardas']; ?>"> <br> <br>
    Telefono nr. <br> <input type="text" name="telefonas"  value="<?php echo $suniukas['telefonas']; ?>"> <br> <br>
    Rezervuotas: <br> <input type="text" name="rezervuotas" value="<?php echo $suniukas['rezervuota']; ?>"><br /> <br>
    <button class= "btn text-white " type="submit" name="button ">Išsaugoti</button><br> <br>
    <a href="admin-list.php">Grįžti</a>
</form>
</div>
