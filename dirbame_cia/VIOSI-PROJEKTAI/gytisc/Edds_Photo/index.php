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

      <div class="container-fluid">
        <div class="container-fluid">
          <div id="pics" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#pics" data-slide-to="0" class="active"></li>
              <li data-target="#pics" data-slide-to="1"></li>
              <li data-target="#pics" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="pics/su_zodz_03.jpg" alt="Gali tu" width="1100" height="500">
              </div>
              <div class="carousel-item">
                <img src="pics/su_zodz_04.jpg" alt="Ar žinai" width="1100" height="500">
              </div>
              <div class="carousel-item">
                <img src="pics/su_zodz_05.jpg" alt="Medinės durys" width="1100" height="500">
              </div>
            </div>
            <a class="carousel-control-prev" href="#pics" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#pics" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <!-- <header class="row bg-danger aukstis-100">
          <div class="col-12">
            Header
          </div>
        </header> -->
        <div class="wrapper row aukstis-500">
          <main class="col-12 bg-info">
            <div class="row navcontainer">
              <nav class="col-12">
                <div class="row logo-container">
                  <div class="col-12 logo1">
                    <a href="#">
                      <img class="logoh" src="pics/baltas.png" alt="Edd's Photo"/>
                    </a>
                  </div>
                </div>
                <div class="row buttons">
                  <navbuttons class="col-12">
                    <!-- <button type="button" class="btn">Home</button>
                    <button type="button" class="btn">Portfolio</button>
                    <button type="button" class="btn">Contacts</button>
                    <button type="button" class="btn">Random</button> -->
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Portfolio</a>
                        <ul>
                          <li class="buttonhiden"><a href="#">Gallery1</a></li>
                          <li class="buttonhiden"><a href="#">Gallery2</a></li>
                          <li class="buttonhiden"><a href="#">Gallery3</a></li>
                          <li class="buttonhiden"><a href="#">Gallery4</a></li>
                          <li class="buttonhiden"><a href="#">Gallery5</a></li>
                          <li class="buttonhiden"><a href="#">Gallery6</a></li>
                        </ul>
                      </li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contacts</a></li>
                    </ul>
                  </navbuttons>
                </div>
                <navfooter class="row">
                  <div class="col-12">
                    <div class="social-icons">
                      <a href="#"><i class="fa fa-facebook-square"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-dribbble"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                  <div class=""></div>
                    <p class="copyright">Copyright &copy; 2015 <span class="text-white">Edd's Photo</span> All Rights Reserved.</p>
                  </div>
                </navfooter>
              </nav>
            </div>
            <aside class="col carousel-2">
              carousel
            </aside>
          </main>
        </div>
        <!-- <div class="row aukstis-100">
          <footer class="col-12 bg-danger">
            Footer
          </footer>
        </div> -->
      </div>
                <!-- <div class="fix-float"></div> -->

        <!-- <button class="slepti" type="button" name="button">Paslepti</button>
        <p>
          Irgi paspaudus - Slepti
        </p> -->

        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
