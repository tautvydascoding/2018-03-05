
<main class="col-md-10 rounded  aukstis-1000">

// <!-- Slaideris - karusele -->
// <!--Indeksatoriai-->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
// <!--pabaiga-->
// <!-- Img blokas-->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="first-slide" src="img/panda11.jpg" alt="Apie kažka">
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>Lorem</h1>
            <p>Tekstas tektas tekstas tekstas</p>
            <p><a class="btn btn-md btn-primary" href="#" role="button">Apie kažka</a></p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img class="second-slide" src="img/paukstis1.jpg" alt="Apie ta">
        <div class="container">
          <div class="carousel-caption">
            <h1>Lorem1</h1>
            <p>Tekstas tektas tekstas tekstas</p>
            <p><a class="btn btn-md btn-primary" href="#" role="button">Apie ta</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="third-slide" src="img/jaguaras1.jpg" alt="Apie ana">
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>Lorem2</h1>
            <p>Tekstas tektas tekstas tekstas</p>
            <p><a class="btn btn-md btn-primary" href="#" role="button">Apie ana</a></p>
          </div>
        </div>
      </div>
    </div>
// <!-- Pabaiga -->
// <!--Kontroleriai-->
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Atgal</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Pirmyn</span>
    </a>
  </div>
// <!-- Slaiderio pabaiga -->



    <div class="horizontali-linija rounded"></div>

// <!-- Pagrindines dalies meniu -->
<ul class="nav main-nav nav-pills nav-fill flex-md-row" id="pills-tab" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="pills-news-tab" data-toggle="pill" href="pills-news" role="tab" aria-controls="pills-news" aria-selected="true">222222</a>
</li>
<li class="nav-item">
<a class="nav-link" id="pills-newarticles-tab" data-toggle="pill" href="#pills-newarticles" role="tab" aria-controls="pills-newarticles" aria-selected="false">Naujausi straipsniai</a>
</li>
<li class="nav-item">
<a class="nav-link" id="pills-newgallery-tab" data-toggle="pill" href="#pills-newgallery" role="tab" aria-controls="pills-newgallery" aria-selected="false">Galerijos naujienos</a>
</li>
</ul>
<div class="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab"><?php include ('./naujienu_blokas.php');?></div>
<div class="tab-pane fade" id="pills-newarticles" role="tabpanel" aria-labelledby="pills-newarticles-tab">Naujausi straipsniai</div>
<div class="tab-pane fade" id="pills-newgallery" role="tabpanel" aria-labelledby="pill-newgallery-tab">Galerijos naujienos</div>
</div>

</main>
// <!-- Pagrines dalies pabaiga -->
// <!-- end wrapper  -->
