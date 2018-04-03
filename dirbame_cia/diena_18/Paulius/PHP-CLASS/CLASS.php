<?php
//--------------------OBJEKTU RECEPTAS-------zodelis class - nesukuria objekto
    class Zmogus{
        public $ugis = 200;
        private $bankoPin = 666;
        protected $ligos = "aids";

        public function informacija(){ //--------SUSIKUREM PUBLIC FUNKCIJA, KAD GALETUME PASIEKTI VISA INFORMACIJA
          echo "PETRO ugis: $this->ugis <br />"; //----THIS kad isliptu is funkcijos ir pasiektu globalius kintamuosius
          echo "PETRO pinas: $this->bankoPin <br />"; //----THIS kad isliptu is funkcijos ir pasiektu globalius kintamuosius
          echo "PETRO ligos: $this->ligos <br />"; //----THIS kad isliptu is funkcijos ir pasiektu globalius kintamuosius
}
        public function einu(){
          echo "einu: <br />";
        }
        public function begu($geitis){
          echo "greit begu: <br />: $greitis <br />";
        }
      }
//-------------------OBJEKTO KURIMAS-------------
      $petras = new Zmogus();
      $ona = new Zmogus();
      $birute = new Zmogus();
      echo "Petro ugis: <br />" . $petras ->ugis . "<br />";
      echo "Onos ugis: <br />" . $ona ->ugis . "<br />";
      echo "Birutes ugis: <br />" . $birute ->ugis . "<br />";
//----------------------REIKSMIU KEITIMAS-----------
      $petras -> ugis = 188;
      echo "Petro ugis: <br />" . $petras ->ugis . "<br />";
      echo "Onos ugis: <br />" . $ona ->ugis . "<br />";
      echo "Birutes ugis: <br />" . $birute ->ugis . "<br />";
//        $petras -> ligos; //---------ERROR PROTECTED KINTAMUJU NEGALIMA PASIEKTI-------
//      $petras ->bankoPin = 112991; //-------ERROR PRIVACIU KINTAMUJU NEGALIMA PASIEKTI--------
//      echo "Petro pinkodas: <br />" . $petras ->bankoPin . "<br />";

      $petras->informacija(); // ------- FUNKCIJOS ISKVIETIMAS, KAD ISVESTU INFORMACIJA


 ?>
