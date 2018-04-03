<?php
      // 1.sukuriam kintamuosius klasei
      // ilgis, svoris, pavadinimas
      // 2. sukuriam f-ja:
      // plaukti(x, y, z)

      //3. zuvims ideti reikalavimus
      include('zuvuReikalavimai.php');

      class Zuvis implements zuvuReikalavimai{
        public $ilgis = 0;
        public $svoris = 0;
        public $pavadinimas = 'bevarde';

        public function plaukti($x, $y,$z){
            echo "plaukiu: $x, $y, $z";
        }
          public function minta($x){
            echo "valgau $x";
          }
          public function augimoGreitis($x){
            echo "augu $x";
          }
      }

 ?>
