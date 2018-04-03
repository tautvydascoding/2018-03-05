<?php
include ("./head.php");
include ("./header.php");
include ("./nav.php");
?>


<main class="col-md-10 rounded aukstis-1000">
    <p>

      <?php
      $page_id = 0;
      $mysqli = new mysqli("localhost", "root", "root", "zoo_db");
      $result_set = $mysqli->query("SELECT * FROM `straipsniai` WHERE `page_id`='$page_id'");
      while ($row = $result_set->fetch_assoc()) {
        echo $row["turinys"];
        echo "<br/>";
      }
      ?>


</p>
<br/>



<h5>Komentuok:</h5>
<br/>
<form name="comment" action="comment.php" method="post">
  <p>
    <label>Vardas:</label>
    <br/>
    <input type="text" name="name" />
  </p>
  <p>
    <label>Komentaras:</label>
    <br/>
    <textarea name="text_comment" cols="125" rows="5"></textarea>
  </p>
  <p>
    <input type="hidden" name="page_id" value="150" />
    <input type="submit" value="Siusti" />
  </p>
</form>

<br/>

<h5>Komentarai:</h5>

<?php
  $page_id = 150;
  $mysqli = new mysqli("localhost", "root", "root", "zoo_db");
  $result_set = $mysqli->query("SELECT * FROM `comments` WHERE `page_id`='$page_id'");
  while ($row = $result_set->fetch_assoc()) {
    echo "<strong>Vartotojo vardas:</strong>";
    echo "<br/>";
    echo $row["name"];
    echo "<br/>";
    echo "<strong>Komentaras:</strong>";
    echo "<br/>";
    echo $row["text_comment"];
    echo "<br/>";
    echo "<br/>";
  }
?>

</main>

<?php
include ("./footer.php");
