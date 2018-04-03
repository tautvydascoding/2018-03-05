
<?php
include ("./head.php");
session_start();

if (!isset($_SESSION['prisijungta']) || $_SESSION['prisijungta']==0){
  header('Location: admin-login.php');
}
?>

<h3>Šuniukų rezervacija</h3>
<ul>
  <a href="admin-form.php?suniukas=1"> <li>Šuniukas 1</li> </a>
  <a href="admin-form.php?suniukas=2"> <li>Šuniukas 2</li> </a>
  <a href="admin-form.php?suniukas=3"> <li>Šuniukas 3</li> </a>
  <a href="admin-form.php?suniukas=4"> <li>Šuniukas 4</li> </a>
  <a href="admin-form.php?suniukas=5"> <li>Šuniukas 5</li> </a>
  <a href="admin-form.php?suniukas=6"> <li>Šuniukas 6</li> </a>
</ul>
