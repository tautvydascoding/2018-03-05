<?php
// uzduotis:
// 1) sukurti interface "Edit" : kuri turi funkcijas: (kurios nera aprasytos (privalomos)!
    // 0) Ar gali tureti kintamuosius????
    // changeName($a)
    // isLogin()
    // getName()
// 2) sukurti (abstrakcia) klase "User" :
    // 0) abstrakti kalse - NEGALI TURETI ABSTRAKCIU KINTAMUJU (BET PAPRASTUS GALI)
    // A) kuri turi neprivalomus kintamuosius:
        // name, password , createdDate, lastLogin
    // B) privaloma funkcija "Loguot()"
    // C) neprivaloma funkcija clearlastLoginTime()
// 3) sukurti klase Admin :
    // A)  kuri panaudoja Edit ir User ~klases (implementuoti ir paveldeti)





// uzduotis:
// 1) sukurti interface "Edit" :
//  1.1) kuri turi funkcijas: (kurios nera aprasytos (privalomos)!
    // changeName($a)
    // getName()
    // isLogin()
    // NOTE: Ar interface gali tureti kintamuosius????
// 2) sukurti (abstrakcia) klase "User" :
    // 0) abstrakti kalse - NEGALI TURETI ABSTRAKCIU KINTAMUJU (BET PAPRASTUS GALI)
    // A) sukurti kintamuosius:
        // name, password , createdDate, lastLogin
    // B) privaloma funkcija "Loguot()"
    // C) neprivaloma funkcija clearlastLoginTime()
// 3) sukurti klase Admin :
    // A)  kuri panaudoja Edit ir User ~klases (implementuoti ir paveldeti)
// 4)
     // A) issivesti username,
     // B) pakeisti username
     // C) issivesti username
     // 5)  panaudoti login funkcija
     // A)  panaudoti login funkcija , pakeitus username

     class Zmogus {
       public $ugis = 0;
       private $pusryciai = '';
       protected $turtas = 'namas';
       public function valgyti() {
         echo "valgau";
       }
     }
     // extend zmogus
     // paveldimi visi kintamieji ir f-jos, kurie yra 'public' arba 'protected'
     class Vyras extends Zmogus {
       private $testosteronas = 6122;
       }

     class Moteris extends Zmogus {
       private $estrogenai = 2111;
     }

 ?>
