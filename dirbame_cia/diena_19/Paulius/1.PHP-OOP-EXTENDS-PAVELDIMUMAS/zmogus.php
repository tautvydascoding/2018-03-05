<?php
      class Zmogus{
         public $ugis = 0;
         private $pusryciai = '';
         protected $turtai = 'Milijonas';
         public function valgyti(){
            echo "valgau";
         }
      }
//extends Zmogus:
// paveldimi visos f-jos ir kintamieji kurie yra public arba
//protected
      class Vyras extends Zmogus {
          private $testosteronas = 6122;
        }
      class Moteris extends Zmogus {
          private $estrogenai = 2111;
        }
  ?>
