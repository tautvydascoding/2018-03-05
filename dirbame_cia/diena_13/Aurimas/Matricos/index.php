<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <!-- galimos klaidos -->
        <!-- blogas kelias iki failo -->
        <!-- "/" ne i ta puse -->
        <!-- neuzdarete ">" -->
        <link rel="stylesheet" href="css/master.css">
        <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
    </head>

    <body>

        <h1> MOkomes </h1>


        <!-- // =================svarbus patarimai===================:
        // ARRAY: jeigu naudoji FOR || while cikla, tai negalvojant masyve naudoti "i" (pvz.: myArray[i])
        // FOR:   "for (i = 0; i < x; i++) {"  - nesusijusi su uzdaviniu (skirtas apeit masyva/ ivykdyti daug kartu kazka)
        // matricas  - visada nusipiesti ant popieriaus eskiza su testiniais duomenimis
        // matrica narys paimamas: myMatrica[x][y]   x- stulpelis; y - eilute
        // matrica - pasitikritni ar nereik x ir y sukeisti vietomis (ar nesuklydai kuris stulpelis ir kuris eilute )
        // matricos ilgis daznai skiriasi nuo plocio.
        //  pvz.:
         // for ( i < eiluciuSkaicius)
         //    for ( k < stulpeliuSkaicius)
         // =================// =================// =================


                    // uzduotis
                    // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
                     // Antraste, img pavadinimas, kaina, prekes aprasymas  -->
                    <?php
                // $visosPrekes=[];
                // $visosPrekes[0]=$preke;
                // $Jonas=["Jonas","jonauskas",15];
                // $Petras=["Petras","Petrauskas",18];
                // $Kazys=["Kaziukas","Kaziauskas",11];
                // $zmones[0]=$Jonas;
                // $zmones[1]=$Petras;
                // $zmones[2]=$Kazys;
                // print_r($zmones);

                // for ($i=0; $i < count($zmones) ; $i++) {
                //   for ($j=0; $j < count($zmones) ; $j++) {
                //     echo "$zmones[$i][$j]";
                //   }
                // }
                $parduotuve=["Antraste", "img pavadinimas","prekes aprasymas","kaina"];
                $preke1=[]

                     ?>

                     <!--  -->
                    <!-- // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
                    // B. i masyva visosPrekes, ideti "preke" masyva
                    // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)


                       // 3 budai
                        // printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
                        // printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]); -->



        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
