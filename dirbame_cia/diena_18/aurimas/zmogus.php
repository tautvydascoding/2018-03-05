<?php
  /*
  php objekto receptas, class yra receptas;
   */
  class Zmogus {
      public $ugis=180;
      private $bankopin=8871;
      protected $ligos="aids";
      public function info(){
        echo "mano ugis: $this->ugis<br/>";
        echo "mano banko pin: $this->bankopin<br/>";
        echo "mano ligos: $this->ligos<br/>";
      }
      public function eiti(){
        echo "Einu, tikrai einu!<br>";
      }
      protected function begu($greitis){
        echo "Begu, tikrai begu! $greitis greiciu begu <br>";
      }

  }
  $Petras= new Zmogus();
  $Onute = new Zmogus();
  $Birute = new Zmogus();


  echo "Petro ugis: ".$Petras->ugis.";<br/>";
  echo "Onutes ugis: ".$Onute->ugis.";<br/>";
  echo "Birutes ugis: ".$Birute->ugis.";<br/>";
  $Petras->ugis=199;
  $Onute->ugis=159;
  $Birute->ugis=169;
  echo "<b>Pakeitem zmoniu ugius:</b><br/>";
  echo "Petro ugis: ".$Petras->ugis.";<br/>";
  echo "Onutes ugis: ".$Onute->ugis.";<br/>";
  echo "Birutes ugis: ".$Birute->ugis.";<br/>";
  echo "Private:<br/>";
  // echo "Birutes ugis: ".$Birute->$bankopin.";<br/>";
  // echo "Birutes ugis: ".$Birute->$ligos.";<br/>";
  echo "=========================================<br/>";

  echo $Petras->info();
  echo $Petras->begu(40);
  echo $Petras->eiti();
  echo "=========================================<br/>";

  


 ?>
