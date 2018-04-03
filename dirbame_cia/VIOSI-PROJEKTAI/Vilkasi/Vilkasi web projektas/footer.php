<div class="col-md-4">
</div>


</div>

<footer class="row aukstis-100">

<div class="footer1 col-md-6">
<p class="copyright">&copy; 2018 Aime.lt</p>
</div>

<?php

  require_once('functions.php');
  $manoKontaktai = getKontaktai(2);
?>

<div class="footer2 col-md">
<p class="footeris">Kontaktai: <br>
Telefonas: <?php echo $manoKontaktai['telefonas'];?><br>
El.pastas: <?php echo $manoKontaktai['pastas'];?> <br>
FB: <?php echo $manoKontaktai['fb'];?> </p>
</div>

</footer>
</div>












</body>
<!-- bootstrap4 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- !!! mano js failas visada zemiausias -->
<script type="text/javascript" src="main.js">
</script>

</html>
