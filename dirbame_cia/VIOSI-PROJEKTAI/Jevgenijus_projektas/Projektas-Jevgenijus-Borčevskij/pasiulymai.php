<?php
include ("./head.php");
include ("./header.php");
include ("./nav.php");
?>



<main class="col-md-10 rounded aukstis-1000">

  <h4>Kokio straipsnio, naujienos, nuotraukos, video ar įdomaus fakto truksta?</h4>
  <br/>
  <form name="comment" action="pasiulau.php" method="post">
    <p>
      <label>Koki turini siūlai?</label>
      <br/>
      <input type="text" name="name" />
    </p>
    <p>
      <label>Vartotojo vardas:</label>
      <br/>
      <input type="text" name="vartotojo_name" />
    </p>
    <p>
      <label>Tavo pasiūlymas:</label>
      <br/>
      <textarea name="text" cols="125" rows="5"></textarea>
    </p>
    <p>
      <input type="hidden" name="page_id" value="150" />
      <input type="submit" value="Siusti" />
    </p>
  </form>

  <br/>

  <h4>Visi pasiūlymai:</h4>

  <?php
    $page_id = 150;
    $mysqli = new mysqli("localhost", "root", "root", "zoo_db");
    $result_set = $mysqli->query("SELECT * FROM `pasiulymai` WHERE `page_id`='$page_id'");
    while ($row = $result_set->fetch_assoc()) {
      echo "<strong>Pasiūlymo tipas:</strong>";
      echo "<br/>";
      echo $row["name"];
      echo "<br/>";
      echo "<strong>Vartotojo vardas:</strong>";
      echo "<br/>";
      echo $row["vartotojo_name"];
      echo "<br/>";
      echo "<strong>Pasiūlymas:</strong>";
      echo "<br/>";
      echo $row["text"];
      echo "<br/>";
      echo "<br/>";
    }
  ?>

</main>

<?php
include ("./footer.php");
