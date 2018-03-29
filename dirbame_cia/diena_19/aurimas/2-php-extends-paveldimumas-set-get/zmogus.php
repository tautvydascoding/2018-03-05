<?php


class Zmogus {
    public $ugis = 0;
    private $pusryciai = 'lapai';
    protected $turtas = 'namas';
    public function valgyti() {
        echo "valgiau:".$this->pusryciai,";<br />";
    }
    public function getPusryciai() {
        return $this->pusryciai;
    }
    public function getTurtas() {
        echo "tutelis:".$this->turtas,";<br />";
    }
    public function setPusryciai($psr){
        $this->pusryciai=$psr;
    }
}
// extends Zmogus:
// pavaldimi visi kintamieji ir f-jos,
// kurie yra 'public' arba 'protected'
class Vyras  extends Zmogus {
    public $ass="nice";
    private $testosteronas = 6122;
    public function newtest($tst){
      $this->testosteronas=$tst;
    }
    public function hormonai(){
      echo "jusu dabartinis testosterono kiekis: $this->testosteronas<br />";
    }


}
class Moteris extends Zmogus {
    private $estrogenai = 2111;
    protected $amzius=41;
    public function whatAge(){
      echo "dabartinis amzius: $this->amzius;<br />";
    }
    public function whatWealth(){
      echo "dabartinis turtas: $this->turtas;<br />";
    }
    public function setWealth($x){
      $this->turtas=$x;
    }
    public function changeAge($age){
      $this->amzius=$age;
    }
}

class Chick extends Zmogus{
  protected $hips=70;
  private $waste=30;
  public function printUgis(){
    echo $this->ugis."<br />";
  }
  public function printPusryciai(){
    echo $this->pusryciai."<br />";
  }
  public function printTurtas(){
    echo $this->turtas."<br />";
  }
  public function getDuomenys(){
    echo "Ugis: ".$this->ugis."; Pusryciai: ".$this->getPusryciai()."; Turtas: ".$this->turtas.";";
  }
}


class Beauty extends Chick {
  public function getDuomenys(){
    echo "Ugis: ".$this->ugis."; Hips: ".$this->hips."; Turtas: ".$this->turtas.";";

  }
}
