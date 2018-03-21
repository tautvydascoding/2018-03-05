<body>

    <p>
      main
    </p>
     <section>
       <?php
       // UZDUOTIS  "Switch"
       // paduoti varda ir Jeigu jis lygus:
       // "audi" - atspausdinti "Susimastykite apie variklio prieziura"
       // "BMW" - atspausdinti "Susimastykite apie greiti ir vairavimo kultura"
       // "opel" - atspausdinti "Susimastykite apie naujus priedus"

       $vardas = "BMW";
       $vardas = trim($vardas); // pasaliname " " (tarpas), tab ir kitus spec. simbolius
       $vardas = strtolower($vardas); //paverciame mazosiomis raidemis

       switch ($vardas) {
         case "audi":
          echo "Susimastykite apie variklio prieziura";
            break;

         case 'BMW':
          echo "Susimastykite apie greiti ir vairavimo kultura";
            break;
         case 'opel':
          echo "Susimastykite apie naujus priedus";
           break;
        default:
         echo "Tokiai: $vardas markei patarimu neturime";
       }
        ?>
     </section>
