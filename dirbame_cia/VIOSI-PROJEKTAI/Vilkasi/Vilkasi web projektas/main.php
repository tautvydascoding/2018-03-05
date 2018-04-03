<body>

    <div class="container-fluid">
        <header class="headeris">

            <nav>

                <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                </div>

               <?php
                    require_once('functions.php');
                    $manoLogo = getLogo(1);
                 ?>

                <div class="logo">

                    <img src="./img/<?php echo $manoLogo['pavadinimas'];?>" alt="">
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="#Apie">APIE AIME</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#kontaktai">KONTAKTAI</a></li>
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

                    <!-- <div class="carousel-caption d-none d-md-block">
                      <h3>AIMĖS <br/> papuošalai</h3>
                      <p>...</p>
                    </div> -->

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



        <?php

            require_once('functions.php');
            $manoApie = getApie(3);
         ?>
         <p> <a name="Apie" > </a></p>
        <div class="row auksinislogo">
            <!-- APIE AIME LOGO -->
            <div  class="apie col-4 mx-auto">
                <img class="apieaimelogo" src="./img/apieaime1.png" alt="">
            </div>
        </div>

        <div class="apieaime row ">
            <!-- APIE AIME APRASYMAS -->
            <div class="col-6 offset-3">
                <h2 class="portfolio"><?php echo $manoApie['antraste'];
                   ?></h2>
                <p class="main_aprasymas">
                  <?php echo $manoApie['tekstas'];?></p>
            </div>
        </div>
    </div>


    <!-- ===========GALERIJA============= -->
    <div class="container">
            <p> <a name="portfolio" > </a></p>
        <h2 class="portfolio"> PORTFOLIO </h2>

        <div class="row"> <!-- ===========Pirma eile============= -->


            <figure class="col-md-4 figura">

                      <img alt="picture" src="./img/1.jpg" class="image img-fluid">

                      <div class="overlay">
                          <div class="text">Nr.1</div>
                        </div>

            </figure>

            <figure class="col-md-4 figura">
                      <img alt="picture" src="./img/2.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.2</div>
                        </div>
            </figure>

            <figure class="col-md-4 figura">
                      <img alt="picture" src="./img/9.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.3</div>
                        </div>
            </figure>

            </div>

            <div class="row">  <!-- ===========Antra eile============= -->

            <figure class="col-md-4">

                    <figure class="figura">
                      <img alt="picture" src="./img/8.jpg" class="img-fluid figura">
                      <div class="overlay">
                          <div class="text">Nr.4</div>
                        </div>
                        </figure>

                  <figure class="nuotrauka-nuotraukoje col-md figura">
                            <img alt="picture" src="./img/6.jpg" class="img-fluid figura">
                            <div class="overlay">
                                <div class="text">Nr.5</div>
                              </div>
                  </figure>

            </figure>

            <figure class="col-md-4 figura">
                      <img alt="picture" src="./img/4.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.6</div>
                        </div>
            </figure>

            <figure class="col-md-4">
              <figure class="figura">
                      <img alt="picture" src="./img/6.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.7</div>
                        </div>
                        </figure>

                  <figure class="nuotrauka-nuotraukoje col-md-12 figura">
                            <img alt="picture" src="./img/6.jpg" class="img-fluid">
                            <div class="overlay">
                                <div class="text">Nr.8</div>
                              </div>
                  </figure>

            </figure>

            </div>



            <div class="row">  <!-- ===========Trecia============= -->


            <figure class="col-md-4 figura">
                      <img alt="picture" src="./img/16.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.9</div>
                        </div>

            </figure>

            <figure class="col-md-4">
<figure class="figura">


                      <img alt="picture" src="./img/6.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.10</div>
                        </div>
                  </figure>

                  <figure class="nuotrauka-nuotraukoje col-md-12 figura">

                            <img alt="picture" src="./img/6.jpg" class="img-fluid">
                            <div class="overlay">
                                <div class="text">Nr.11</div>
                              </div>
                  </figure>

            </figure>

            <figure class="col-md-4 figura">
                      <img alt="picture" src="./img/14.jpg" class="img-fluid">
                      <div class="overlay">
                          <div class="text">Nr.12</div>
                        </div>
            </figure>

          </div>

          <div class="row">  <!-- ===========KETVIRTA============= -->


          <figure class="col-md-6 figura">
                    <img alt="picture" src="./img/slider1.png" class="img-fluid">
                    <div class="overlay">
                        <div class="text">Nr.13</div>
                      </div>
          </figure>



          <figure class="col-md-6 figura">
                    <img alt="picture" src="./img/slider2.png" class="img-fluid">
                    <div class="overlay">
                        <div class="text">Nr.14</div>
                      </div>
          </figure>

        </div>



            </div>

    </div>
    <!-- ===========GALERIJA PASIBAIGIA============= -->

    <div class="container-fluid">
        <p> <a name="kontaktai" > </a></p>
      <h2 class="portfolio">KONTAKTAI</h2>
      <div class="kontaktai row aukstis-700">

        <div class="col-md-4">


          </div>


          <div class="forma col-md-4">
    <h2 class="portfolio">Susisiekime!</h2>
    <div class="inner-content" vertical-align="center">
      <p class="portfolio">Iškilo klausimas? Norite pasitarti dėl papuošalų? Susisiekime:)</p>
      <form class="" action="email-siuntimas.php" method="post">
        <input class="half-width first-input" type="text" name="vardas" placeholder="Vardas">
        <input class="half-width" type="text" name="pavarde" placeholder="Pavardė">
        <input class="full-width" type="email" name="pastas" placeholder="El. paštas">
        <input class="half-width first-input" type="text" name="numeris" placeholder="Telefono nr.">
        <input class="half-width" type="text" name="tema" placeholder="Tema">
        <textarea class="full-width"  name="klausimas" rows="8" cols="48" placeholder="Jūsų klausimas" ></textarea>
        <input type="submit" name="button" value="Siųsti">
      </form>
          </div>
            </div>
