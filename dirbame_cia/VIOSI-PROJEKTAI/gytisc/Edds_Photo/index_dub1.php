<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edd's Photo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/sliderstyle2.css" />
        <script type="text/javascript" src="js/modernizr.custom.86080.js"></script>
        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- <link href="fonts/fontawesome/css/fontawesome.min.css" rel="stylesheet"> -->
        <link href="css/main.css" rel="stylesheet" type="text/css">
    </head>

    <body>

      <div class="container-fluid nopadding">
        <div id="background" class="wraper row stretch">
          <main class="col-md-12">
            <div id="pics" class="row carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#pics" data-slide-to="0" class="active"></li>
                <li data-target="#pics" data-slide-to="1"></li>
                <li data-target="#pics" data-slide-to="2"></li>
              </ul>
              <div id="pics" class="carousel-inner carousel-indicators">
                <ul class="cb-slideshow carousel-indicators">
                  <li data-target="#pics" data-slide-to="0" class="active"><span>Image 01</span><div><h3>Pie·vo·je</h3></div></li>
                  <li data-target="#pics" data-slide-to="1"><span>Image 02</span><div><h3>Ne.sva.ru.mas</h3></div></li>
                  <li data-target="#pics" data-slide-to="2"><span>Image 03</span><div><h3>Gro.žis</h3></div></li>
                  <li data-target="#pics" data-slide-to="3"><span>Image 04</span><div><h3>Ke.lia.vom</h3></div></li>
                  <li data-target="#pics" data-slide-to="4"><span>Image 05</span><div><h3>Lon.don</h3></div></li>
                  <li data-target="#pics" data-slide-to="5"><span>Image 06</span><div><h3>Mei.lė</h3></div></li>
                </ul>
                <!-- <div class="carousel-item active">
                  <img src="pics/01.jpg" alt="Pievoje">
                </div>
                <div class="carousel-item">
                  <img src="pics/02.jpg" alt="Levitacija">
                </div>
                <div class="carousel-item">
                  <img src="pics/03.jpg" alt="Artimas grožis">
                </div>
                <div class="carousel-item">
                  <img src="pics/04.jpg" alt="Keliavom">
                </div> -->
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
