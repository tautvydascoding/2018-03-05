<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>GALLERY</title>
        <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="libs/bootstrap4/css/bootstrap.min.css">
        <!-- galimos klaidos -->
        <!-- blogas kelias iki failo -->
        <!-- "/" ne i ta puse -->
        <!-- neuzdarete ">" -->
        <link rel="stylesheet" href="blog-css/blog.css">
        <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
    </head>

    <body>
      <?php
      require_once('./GetOurTeam.php');
       ?>

      <!--1.================HEADER=================-->
      <nav id="nav">
          <div id="logo"> <b><a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/" >Logo</a> </b>
              <li>Blog</li>
              <li>About</li>
            <li>
              <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/gallery.php" > Gallery</a>
           </li>

              <li>Contact</li>
            <li>
                <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/" > Main</a>
            </li>
        </div>
      </nav>

   <div id="hero"></div>

   <!--1.===========HEADER END==============-->
    <!-- $komandosNarys = getTeam(1);
   echo $komandosNarys['Vardas'] . " " . $komandosNarys['Pavarde'] . "<br /> " . $komandosNarys['Pareigos'];

 $paslauga = getPaslaugos(1);
      echo $paslauga['Data'] -->
 <!-- $paslauga = getPaslaugos(1);
      echo $paslauga['Straipsnis']; -->


<div class="container">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(1);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature1.jpeg">
                    <div class="row blog-content">
              <hr />    <hr />    <h4> <b>
                        <?php $paslauga = getPaslaugos(1);
                            echo $paslauga['Straipsnis'] . "<br /> ";
                       ?> </b> </h4> <hr />
                       <h6>
                      <?php $paslauga = getPaslaugos(1);
                           echo $paslauga['Tema'];
                        ?> </h6>

                        <?php $paslauga = getPaslaugos(1);
                            echo $paslauga['Turinys'];
                         ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>
<div class="container wtf">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(2);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature2.jpeg">
                    <div class="row blog-content">
                      <hr />    <hr />    <h4> <b>
                                <?php $paslauga = getPaslaugos(2);
                                    echo $paslauga['Straipsnis'] . "<br /> ";
                               ?> </b> </h4> <hr />
                               <h6>
                              <?php $paslauga = getPaslaugos(2);
                                   echo $paslauga['Tema'];
                                ?> </h6>
                                <?php $paslauga = getPaslaugos(2);
                                    echo $paslauga['Turinys'];
                                 ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>
<div class="container wtf">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(3);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature3.jpeg">
                    <div class="row blog-content">
                    <hr />    <hr />    <h4> <b>
                              <?php $paslauga = getPaslaugos(3);
                                  echo $paslauga['Straipsnis'] . "<br /> ";
                             ?> </b> </h4> <hr />
                             <h6>
                            <?php $paslauga = getPaslaugos(3);
                                 echo $paslauga['Tema'];
                              ?> </h6>
                              <?php $paslauga = getPaslaugos(3);
                                  echo $paslauga['Turinys'];
                               ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>
<div class="container wtf">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(4);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature1.jpeg">
                    <div class="row blog-content">
                      <hr />    <hr />    <h4> <b>
                                <?php $paslauga = getPaslaugos(4);
                                    echo $paslauga['Straipsnis'] . "<br /> ";
                               ?> </b> </h4> <hr />
                               <h6>
                              <?php $paslauga = getPaslaugos(4);
                                   echo $paslauga['Tema'];
                                ?> </h6>
                                <?php $paslauga = getPaslaugos(4);
                                    echo $paslauga['Turinys'];
                                 ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>
<div class="container wtf">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(5);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature2.jpeg">
                    <div class="row blog-content">
                      <hr />    <hr />    <h4> <b>
                                <?php $paslauga = getPaslaugos(5);
                                    echo $paslauga['Straipsnis'] . "<br /> ";
                               ?> </b> </h4> <hr />
                               <h6>
                              <?php $paslauga = getPaslaugos(5);
                                   echo $paslauga['Tema'];
                                ?> </h6>
                                <?php $paslauga = getPaslaugos(5);
                                    echo $paslauga['Turinys'];
                                 ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>
<div class="container wtf">
    <div class="row blog-row bg-color-white block-padding">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="row blog-date">
              <?php $paslauga = getPaslaugos(6);
                    echo $paslauga['Data']
                ?>
            </div>

            <div class="row blog-title">
              <div class="col">

            </div>
          </div>
            <div class="row blog-image center-block offset-3">
                <figure class="effect-layla">
                    <img src="foto-blog/nature3.jpeg">
                    <div class="row blog-content">
                      <hr />    <hr />    <h4> <b>
                                <?php $paslauga = getPaslaugos(6);
                                    echo $paslauga['Straipsnis'] . "<br /> ";
                               ?> </b> </h4> <hr />
                               <h6>
                              <?php $paslauga = getPaslaugos(6);
                                   echo $paslauga['Tema'];
                                ?> </h6>
                                <?php $paslauga = getPaslaugos(6);
                                    echo $paslauga['Turinys'];
                                 ?>
                    </div>
                    <figcaption></figcaption>
                </figure>
            </div>
</div>
</div>
</div>





        <!-- bootstrap4 -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- !!! jQuery "slim" yra nepilna versija ir jQuery kai kurios komandos neveikia, reiktu isisdeti kita jQuery  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas visada zemiausias -->
        <script type="text/javascript" src="main.js"> </script>
    </body>
</html>
