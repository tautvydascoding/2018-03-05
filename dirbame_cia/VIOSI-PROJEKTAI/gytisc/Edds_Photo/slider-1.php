<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Image Slider with Masking Effect</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

  <link rel='stylesheet prefetch' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>

      <style>
      /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
      @import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
html,
body {
  height: 100%;
  position: relative;
  font-family: Roboto;
  background: #f8f8f8;
}

.slider-ctr {
  width: 700px;
  height: 440px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -220px;
  margin-left: -350px;
  box-sizing: border-box;
  border: 10px solid white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.15), 0 5px 20px 3px rgba(0, 0, 0, 0.1);
}
.slider-ctr:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6) 100%);
  background: -webkit-linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6) 100%);
  pointer-events: none;
  z-index: 9;
}

.slider-control {
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 80px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.15);
  z-index: 99;
}
.slider-control .control {
  width: 50%;
  height: 40px;
  display: block;
  float: left;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: .3s all ease;
  background: white;
}
.slider-control .control .icon {
  pointer-events: none;
  transition: .3s all ease;
}
.slider-control .control.disabled {
  pointer-events: none;
  background: #ddd;
}
.slider-control .control.disabled .icon {
  opacity: .5;
}

.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.45s all cubic-bezier(0.65, 0.05, 0.36, 1);
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.125);
}
.slide.slide-on {
  -webkit-clip-path: inset(0 100% 0 0);
  clip-path: inset(0 100% 0 0);
}
.slide.text-on .title {
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide.text-on .author {
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.6s;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide img {
  display: block;
}
.slide figcaption {
  position: absolute;
  top: 30px;
  left: 30px;
}
.slide .title {
  font-size: 50px;
  margin-bottom: 2px;
  color: white;
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 100%);
  clip-path: inset(0 0 0 100%);
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  position: relative;
}
.slide .author {
  font-size: 16px;
  color: white;
  opacity: .8;
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 100%);
  clip-path: inset(0 0 0 100%);
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  z-index: 9;
}

    </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>

</head>

<body>

<div class="slider-ctr">
  <figure class="slide"><img src="pics/su_zodz_03.jpg" alt="Sky"/>
    <figcaption>
      <div class="title">Gali tu</div>
      <div class="author">Edd's</div>
    </figcaption>
  </figure>
  <figure class="slide"><img src="pics/su_zodz_04.jpg" alt="River"/>
    <figcaption>
      <div class="title">Ar žinai</div>
      <div class="author">Edd's</div>
    </figcaption>
  </figure>
  <figure class="slide"><img src="pics/su_zodz_05.jpg" alt="Rain"/>
    <figcaption>
      <div class="title">Medinės durys</div>
      <div class="author">Edd's</div>
    </figcaption>
  </figure>
  <div class="slider-control">
    <div class="control prev disabled">
      <div class="icon ion-chevron-left"></div>
    </div>
    <div class="control next">
      <div class="icon ion-chevron-right"></div>
    </div>
  </div>
</div>
  <script src='http://codepen.io/balapa/pen/c58fffe58d661ae3d4b168a43eb3b2b8.js'></script>

    <script src="js/slider-1.js"></script>

</body>
</html>
