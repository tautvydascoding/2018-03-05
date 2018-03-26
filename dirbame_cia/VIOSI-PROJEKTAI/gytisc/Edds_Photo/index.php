<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edd's Photo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/sliderstyle3.css" />
        <script type="text/javascript" src="js/modernizr.custom.86080.js"></script>
        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="css/main.css" rel="stylesheet" type="text/css">
    </head>

    <body>

      <div class="container-fluid nopadding">
        <div class="wraper row stretch">
          <main class="col-md-12">
            <div id="pics" class="row carousel slide" data-ride="carousel">
              <ul class="cb-slideshow">
                <li><span>Image 01</span><div><h3>gam.to.je</h3></div></li>
                <li><span>Image 02</span><div><h3>leng.va</h3></div></li>
                <li><span>Image 03</span><div><h3>ar.ti</h3></div></li>
                <li><span>Image 04</span><div><h3>ke.ly.je</h3></div></li>
                <li><span>Image 05</span><div><h3>lon.do.nas</h3></div></li>
                <li><span>Image 06</span><div><h3>kar.tu</h3></div></li>
              </ul>
              <?php
                include_once('nav.php');
              ?>
            </div>
            <!-- <aside class="col-md-12 carousel-2">
              carousel
            </aside> -->
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
