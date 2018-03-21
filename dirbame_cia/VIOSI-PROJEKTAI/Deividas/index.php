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
<!-- karuseles -->

    <!--  -->
    </head>

      <body>




        <div id="demo" class="carousel slide" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>


          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="www/g1.jpeg" alt="slide1">
              <div class="carousel-caption">
                <div class="klase">
                  <link href="https://fonts.googleapis.com/css?family=Coda+Caption:800" rel="stylesheet">
                <h3>321&Action</h3>
              </div>
              </div>
            </div>

            <div class="carousel-item ">
              <img src="www/g2.jpeg" alt="slide2">
                <div class="carousel-caption">
                  <div class="klase2">
                  <h2>Best video & photography
                  continent company</h2>
                </div>
                </div>
            </div>

            <div class="carousel-item">
              <img src="www/g3.jpeg" alt="slide3">
            </div>
          </div>


          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>

        </div>

<!-- meniu -->
<div class="container-fluid">
  <nav>
    <img src="www/log.png" alt="logo" width="200" height="80">
    <ul>
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
      <li><a  href="#"> Home </a> </li>
      <li><a  href="#ab"> About </a> </li>
      <li><a  href="#"> Gallery </a> </li>
      <li><a  href="#"> Service & Price </a> </li>
      <li><a  href="#"> Contacts </a> </li>
    </ul>
  </nav>
</div>
<!-- meniu end  -->



<!--about us  -->
<div class="container-fluid">
  <div id='ab' class="row mt-2">
    <div class="col">
      <div class="aboutus bg-info">
      <h2>About us </h2>
      </div>
    </div>
  </div>
<!--  -->
<div class="row ">
      <div class="ab1">
      <div class="col-4">
        <img  src="./www/ab1.jpeg" width="400" height="450" alt="" class="rounded">
      </div>
    </div>


  <div class="col-4 mt-5">
      <article class="abtekstas">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>


      <div class="col-4 offset-4 mt-6 ab3">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
  </div>
  <!-- row end -->
</div>


<div class="ab2">
  <div class="col-4 ">
    <img src="./www/ab2.jpeg" width="600" height="430" alt="" class="rounded" >
  </div>
</div>

  <div class="ab4">
    <div class="col-4">
      <img src="./www/ab4.jpg" width="980" height="550" alt=""
      class="rounded">
    </div>
  </div>

  <div class="ab5">
    <div class="col-4">
      <img src="./www/ab5.jpeg" width="550" height="350" alt=""
      class="rounded">
    </div>
  </div>

<div class="abb">
    <div class="col-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
    </div>
</div>

<div class="abb2">
  <div class="col-4">
    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>


</div>
<!-- container end -->





        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
<!-- scrolin meniu -->
        <script type="text/javascript">
        $(window).on('scroll', function() {
          if ($(window).scrollTop()) {
            $('nav').addClass('black');
          } else {
            $('nav').removeClass('black');
          }
        })</script>
  <!--  -->
    </body>
</html>
