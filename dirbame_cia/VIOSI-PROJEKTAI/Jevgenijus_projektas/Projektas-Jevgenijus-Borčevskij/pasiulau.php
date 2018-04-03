<?php
  $name = $_POST["name"];
  $vartotojo_name = $_POST["vartotojo_name"];
  $page_id = $_POST["page_id"];
  $text_comment = $_POST["text"];
  $name = htmlspecialchars($name);
  $text_comment = htmlspecialchars($text_comment);
  $vartotojo_name = htmlspecialchars($vartotojo_name);
  $mysqli = new mysqli("localhost", "root", "root", "zoo_db");
  $mysqli->query("INSERT INTO `pasiulymai` (`name`, `page_id`, `vartotojo_name`, `text`) VALUES ('$name', '$page_id', '$vartotojo_name', '$text_comment')");
  header("Location: ".$_SERVER["HTTP_REFERER"]);
