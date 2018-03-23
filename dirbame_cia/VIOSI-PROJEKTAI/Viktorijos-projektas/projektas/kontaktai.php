
<div class="row ">
  <div class="col kontaktai">
    <h2>Kontaktai</h2>
  </div>
</div>

<div class="row">
  <div class="col zemelapis">
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
          map: map
        });
      }
    </script>
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsaSu3fG9V4lAFNbN9oQ6hPA77wXdxqq8&callback=initMap">
    </script>
  </div>
</div>
