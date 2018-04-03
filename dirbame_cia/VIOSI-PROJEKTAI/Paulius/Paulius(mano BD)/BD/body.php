<body>

  <?php
  require_once('./GetOurTeam.php');
   ?>



<!--============1.HEADER================-->
    <header id="nav">
      <ul id="logo"> <b><a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/" >Logo</a> </b>
          <li>
            <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/blog.php">Blog</a> </li>
          <li>About</li>
        <li>
          <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/gallery.php" > Gallery</a>
        </li>
          <li>Contact</li>
        <li>
            <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/" > Main</a>
        </li>
      </ul>
    </header>



<div class="container-fluid">
  <div class="row">



<div id="hero">  </div>

</div>

</div>


<!--============2.PRANESIMAS SUKAS=============-->
<div id="main">
        <div id="msg">Lorem<br>Ipsum</div>
        <div id="box">
            <div id="side1">Lorem</div>
    <div id="side2">Lorem</div>
            <div id="side3">Lorem</div>
            <div id="side4">Lorem</div>
        </div>
</div>
<!--==========2.PRANESIMAS SUKAS END=========-->
<!--===========1.HEADER END=================-->

<!--3.==============ABOUT===============-->
<div class="image-aboutus">
<div class="container">
<div class="row">
    <div class="col-md-6 offset-3">
     <h1 class="lg-text">About Us</h1>
     <p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

     <ul class="socTinklai">
  <li class="facebook"><a href=""><i class="fa fa-fw fa-facebook"></i>Facebook</a></li>
  <li class="twitter"><a href=""><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
  <li class="instagram"><a href=""><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>

</ul>

   </div>
</div>
</div>
</div>



<!--3.============ABOUT END=================-->

<!--4.==============OUR PRICES===================-->

<div class="container">
<div class="title-arch"><h1 class="our-prices">OUR PRICE's</h1></div>
<div class="row">


<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 project ">
      <div class="project-hover">
        <h1>Lorem Ipsum</h1>

          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
          <a href="#">250€</a>
      </div>
  </div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 project project-2">
    <div class="project-hover">
        <h1>Lorem Ipsum</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
          <a href="#">340€</a>
      </div>
  </div>
<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 project project-3">
    <div class="project-hover">
        <h1>Lorem Ipsum</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
          <a href="#">420€</a>
      </div>
  </div>

</div>
  </div>

  <div class="clearfix"></div>
</div>
<!--4.==============OUR PRICES END===================-->



<!--5.===================ARTICLE====================-->
<div class="container" style="margin-top:40px">
<div class="row">
<div class="col-md-12">
  <h3>
    LACINIA EGESTAS AMET <br />
    TINCIDUNT VITAE VENENATIS
    </h3>

</div>
</div>
<div class="row h3bg">
<div class="col-6 offset-3">
  <p class="h3txt">
    Ac mollis metus. Nulla tristique urna sit amet sapien placerat euismod. Suspendisse eget viverra ex. Nunc vel justo lectus. Suspendisse potenti. Phasellus turpis augue, fringilla ut nisi vel placerat.

  </p>


</div>

</div>
</div>

<div class="container">
<div class="row bg-light">
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">

    <p class="mb-0">
  <b><u> <?php $paslauga = getPrekes(1); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>
</div>

<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/326678/pexels-photo-326678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(2); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(3); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
</div>
<div class="row bg-light">
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/65225/boat-house-cottage-waters-lake-65225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive " />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(4); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/134525/pexels-photo-134525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(5); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(6); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
</div>
<div class="row galleryEnd bg-light"> <!--JEIGU LIEKA MARGIN NENUSPALVINTAS TAI CIA=======-->
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/59969/papillon-dog-animal-59969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(7); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(8); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
  <img alt="Bootstrap Image Preview" src="https://images.pexels.com/photos/594384/van-vw-travel-trip-594384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid img-responsive" />
  <blockquote class="blockquote">
    <p class="mb-0">
      <b><u> <?php $paslauga = getPrekes(9); echo $paslauga['Paslauga'] . " <br />" . $paslauga['Kaina']; ?> </u></b> Euro
      <button type="button" class="review">
        Order
      </button>
    </p>

  </blockquote>

</div>
</div>
</div>


<!-- 5.=================ARTICLE END============-->




<!--=================6. KARUSELE==========-->
<div class="container-fluid">
  <div class="row">


<div id="demo" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
<li data-target="#demo" data-slide-to="0" class="active"></li>
<li data-target="#demo" data-slide-to="1"></li>
<li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="carousel-inner">
<div class="carousel-item active">
  <img src="foto/main.carousel1.jpeg" alt="slide1">
  <div class="carousel-caption">
</div>
</div>

<div class="carousel-item ">
  <img src="foto/main.carousel2.jpg" alt="slide2">
    <div class="carousel-caption">
    </div>
</div>

<div class="carousel-item">
  <img src="foto/main.carousel3.jpg" alt="slide3">
  <div class="carousel-caption">
</div>
</div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
<span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
<span class="carousel-control-next-icon"></span>
</a>

</div>
</div>
</div>

<!--6. ===============KARUSELE END================-->



<!--7.=================GALLERY================-->
<div class="container bg-light">
<div class="row">
<div class="col-12">
    <h1 class="glr2"> Gallery</h1>
    <p class="glr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/gallery.php" class="pink-button">Go To Gallery</a>
</div>
<!-- col-xl-4 col-lg-4 col-md-12 col-sm-12 -->
<!-- col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 -->
<div class="col-md-4 col-sm-12 col-xs-12"><img class="img-responsive img-fluid" src="http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg" /></div>

    <div class="col-md-4 col-sm-12 col-xs-12"><img class="img-responsive img-fluid" src="http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg" /></div>



    <div class="col-md-4 col-sm-12 col-xs-12"><img class="img-responsive img-fluid" src="http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg" /></div>
</div>


</div>
<!--7.====================+GALLERY END================-->


<!--8.===================OUR TEAM=================-->

<div class="container" style="margin-top:15px">

    <div class="row">
      <div class="team">
        <div class="text-center">
            <h2><span class="ion-minus"></span>Our Team<span class="ion-minus"></span></h2>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus </p><br>

        </div>

    </div>


  <div class="row text-center">

    <div class="post col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <img class="img-thumbnail" alt="team-photo" src="https://images.pexels.com/photos/459953/pexels-photo-459953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%">
            <div class="post-s">


            <h4> <b> <?php $komandosNarys = getTeam(1);
            echo $komandosNarys['Vardas'] . " " . $komandosNarys['Pavarde'] . "<br /> " . $komandosNarys['Pareigos']; ?> <br /> </b> </h4>


            </div>



     </div>

     <div class="post col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <img class="img-thumbnail" alt="team-photo" src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%">
            <div class="post-s">


              <h4> <b> <?php $komandosNarys = getTeam(2);
              echo $komandosNarys['Vardas'] . " " . $komandosNarys['Pavarde'] . "<br /> " . $komandosNarys['Pareigos']; ?> <br /> </b> </h4>
            </div>



     </div>

     <div class="post col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <img class="img-thumbnail" alt="team-photo" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="100%">
            <div class="post-s">


              <h4> <b> <?php $komandosNarys = getTeam(3);
              echo $komandosNarys['Vardas'] . " " . $komandosNarys['Pavarde'] . "<br />" . $komandosNarys['Pareigos']; ?> <br /> </b> </h4>
            </div>



        </div>

  </div>

</div>
</div>
<!--8.=================OUR TEAM END==========-->

<!--9.==================BLOG BLOG ==============-->
<div class="container bg-light" style="margin-top:65px">
<div class="row">
<h1 class="blog">Latest Blog's <a href="http://localhost/VIOSI-PROJEKTAI/Paulius/Paulius(mano%20BD)/BD/blog.php" class="baton">Blog Page</a>

</h1>


</div>

  <div class="container index-content">
    <div class="row">
      <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 2</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
    </div>
</div>

  <div class="container index-content">
    <div class="row">
        <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 4</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 5</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    <h4>Lorem Ipsum 6</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-ici.html" class="blue-button">Read More</a>
                </div>
            </div>
        </a>
    </div>
</div>
</div>
<!--9.==================BLOG BLOG END==============-->
