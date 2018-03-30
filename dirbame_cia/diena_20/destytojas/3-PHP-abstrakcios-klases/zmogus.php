<?php
// ZMOGUS.PHP

abstract class Zmogus {
    public $vardas = 'neatsimenu';
    public function valgyti() {
        // codas
    }
    // nesuprogramuota f-ja
    // 'getPasiekimai' - privales but suprogramuota, klaseje kuri paveldi klase 'Zmogus'
    abstract public function getPasiekimai();
}
