<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edd's Photo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- <link href="fonts/fontawesome/css/fontawesome.min.css" rel="stylesheet"> -->
        <link href="css/main.css" rel="stylesheet" type="text/css">
    </head>

    <body>

      <div class="container-fluid nopadding">
        <div class="wraper row">
          <main class="col-md-12">
            <div id="pics" class="row carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#pics" data-slide-to="0" class="active"></li>
                <li data-target="#pics" data-slide-to="1"></li>
                <li data-target="#pics" data-slide-to="2"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="pics/01.jpg" alt="Pievoje" width="1100" height="500">
                </div>
                <div class="carousel-item">
                  <img src="pics/02.jpg" alt="Levitacija" width="1100" height="500">
                </div>
                <div class="carousel-item">
                  <img src="pics/03.jpg" alt="Artimas grožis" width="1100" height="500">
                </div>
                <div class="carousel-item">
                  <img src="pics/04.jpg" alt="Keliaujam" width="1100" height="500">
                </div>
              </div>
              <a class="carousel-control-prev" href="#pics" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#pics" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
              <?php
                include_once('nav.php');
              ?>
            </div>
            <aside class="col-md-12 carousel-2">
              carousel
            </aside>
          </main>
        </div>
      </div>
                <!-- <div class="fix-float"></div> -->

        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
