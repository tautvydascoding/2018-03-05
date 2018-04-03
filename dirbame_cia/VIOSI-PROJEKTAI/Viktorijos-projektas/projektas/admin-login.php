<?php
session_start();

if ($_POST) {
  $pass=$_POST['pass'];
  if ($pass=='123'){
    $_SESSION['prisijungta']=1;
    header('Location: admin-list.php');
  } else {
    $_SESSION['prisijungta']=0;
  }
}
 ?>


<h3 class= "m-3">Prisijungimas</h3>

  <div class="container"></div>
    <div class="row">
      <div class="col-4"></div>
        <form class="col-4 ml-3" action="admin-login.php" method="post">
            Slaptažodis  <br>
            <input type="password" name="pass" value="">  <br> <br>
            <button class= "btn text-white " type="submit" name="button ">Prisijungti</button><br> <br>
        </form>
      <div class="col-4"></div>
    </div>
  </div>
