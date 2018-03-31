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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css" integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css" integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P" crossorigin="anonymous">
    <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
</head>

<body>

    <div class="container-fluid">
        <header class="headeris">

            <nav>

                <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                </div>

                <div class="logo">
                    <img src="./img/logoheader.svg" alt="">
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="#">APIE AIME</a></li>
                        <li><a href="#">GALERIJA</a></li>
                        <li><a href="#">BLOGAS</a></li>
                        <li><a href="#">KONTAKTAI</a></li>
                    </ul>
                </div>
            </nav>

        </header>





        <!-- KARUSELE -->

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="./img/slider1.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="./img/slider2.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="./img/slider3.png" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>





        <div class="row auksinislogo">
            <!-- APIE AIME LOGO -->
            <div class="apie col-4 mx-auto">
                <img class="apieaimelogo" src="./img/apieaime1.png" alt="">
            </div>
        </div>

        <div class="apieaime row ">
            <!-- APIE AIME APRASYMAS -->
            <div class="col-6 offset-3">
                <p class="main_aprasymas">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

    </div>


    <!-- ===========GALERIJA============= -->
    <div class="container">
        <div class="row">


            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/1.jpg" class="img-fluid">
                  </a>
            </figure>

            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/2.jpg" class="img-fluid">
                  </a>
            </figure>

            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/9.jpg" class="img-fluid">
                  </a>
            </figure>

            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/8.jpg" class="img-fluid">
                  </a>
            </figure>

            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/4.jpg" class="img-fluid">
                  </a>
            </figure>

            <figure class="col-md-4">
                <a href="">
                      <img alt="picture" src="./img/6.jpg" class="img-fluid">
                  </a>
            </figure>


        </div>

    </div>
    <!-- ===========GALERIJA PASIBAIGIA============= -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 aukstis-700 bg-info">

        </div>

      </div>

    </div>









</body>
<!-- bootstrap4 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- !!! mano js failas visada zemiausias -->
<script type="text/javascript" src="main.js">
</script>

</html>


<?php  ?>
