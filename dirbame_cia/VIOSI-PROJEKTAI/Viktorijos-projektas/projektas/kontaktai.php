
<div class="row ">
  <div class="col kontaktai">
    <h2>Ko<span>ntak</span>tai</h2>
  </div>
</div>

<div class="row">
  <div class="col zemelapis">
    <div class="kontaktine-info">
      <h3>VEISLYNO KONTAKTAI</h3>
      <p><li>Tel. nr.: <strong>+370 600 00000</strong></li>
      <p><li>E-mail: <strong>info@tikidile.lt</strong></li>
      <p><li>Adresas: <strong>Laimės g.1, Seniava, Kauno r.</strong></li>
      </p>
    </div>
    <div id="map" style=""></div>
    <script>
      function initMap() {
        var kauno_pilis = {lat: 54.848689, lng: 23.901913};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: kauno_pilis
        });
        var marker = new google.maps.Marker({
          position: kauno_pilis,
          map: map,
        });
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
      }
    </script>
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsaSu3fG9V4lAFNbN9oQ6hPA77wXdxqq8&callback=initMap">
    </script>
  </div>

  <div class="col kontaktu-forma">
    <div class="row">
      <div class="col">
        <h5>Užpildykite formą ir mes su Jumis susisieksime</h5>
      </div>
    </div>

    <form class="row contact" action="index.html" method="post">
      <div class="col kontaktu-forma-kaire">
        <input type="text" placeholder="Vardas, pavardė*" name="" value="">
        <br>
        <input type="text" placeholder="Tel.nr." name="" value="">
        <br>
        <input type="text" placeholder="El. pašto adresas*"name="" value="">
      </div>
      <div class="col kontaktu-forma-desine">
      <textarea name="name" placeholder="Jūsų žinutė"rows="6" cols="50"></textarea>
      <button type="submit" name="Siųsti" class="kontaktu-forma-btn">Siųsti</button>
      </div>
    </form>

  </div>
</div>
