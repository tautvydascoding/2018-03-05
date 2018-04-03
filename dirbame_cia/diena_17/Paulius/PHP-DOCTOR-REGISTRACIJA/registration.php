<h2> Sveikinu Uzsiregistravus Daktareli!!! </h2>

<?php
      print_r( $_GET); //visada pasitikrinam ar turim duomenis ka ketinam ideti

      require_once('./doctors_functions.php');

      $vard = $_GET['vardas'];
      $pavard = $_GET['pavarde'];
      $tel = $_GET['tel'];

      createDoctor( $vard, $pavard, $tel);
      echo "Jus uzregistruotas";
?>

<?php
      //     require_once('./doctors_functions.php');

//          $vard = $_GET['vardas'];
//          $pavard = $_GET['pavarde'];
//          $tel = $_GET['tel'];

//          createDoctor( $vard, $pavard, $tel);
//          echo "Jus uzregistruotas"; 


 ?>
