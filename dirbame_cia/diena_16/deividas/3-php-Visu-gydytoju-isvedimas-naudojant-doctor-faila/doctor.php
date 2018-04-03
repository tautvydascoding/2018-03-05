<?php

$manoGydytojas = getDoctor($i); // gryzta masyvas (array)
echo "<li class='bg-warning m-1'>";
echo $manoGydytojas['name']. " " . $manoGydytojas['lname'];
echo "</li> ";

 ?>
