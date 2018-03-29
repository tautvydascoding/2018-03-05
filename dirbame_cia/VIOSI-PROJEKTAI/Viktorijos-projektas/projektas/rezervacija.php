

<div class="row  ">
  <div class="col suniukai">
    <h2>Šuniu<span>kų rez</span>ervacija</h2>
    <p>Rugsėjo mėnesį mūsų šeima praturtėjo net šešiais nuostabiais Kavalieriaus Karaliaus Karolio spanieliais. Savo pirmąją vadą atsivedė daugkartinė Lietuvos čempionė Havana. Šuniukus jau galite rezervuoti žemiau.</p>
  </div>
</div>

<div class="row ">
  <div class=" col-3 card suniukas-1">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Šuniukas 1">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Chase <img src="img/male.png" alt="Patinėlis"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
        <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-1">REZERVUOTI</a>
      </div>
    </div>
  </div>
  <!-- Modal -->
<div class="modal fade" id="suniukas-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suniukas-1-1">Užpildykite šią formą ir mes su Jumis susisieksime dėl rezervacijos patvirtinimo:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="zinute">

        </div>
        <form class="row contact" action="index.html" method="get">
            <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="vardas" value="">
            <input class="col-5 modal-body-rezervuoti " type="text" placeholder="Tel.nr." name="telefonas" value="">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="target">Patvirtinti rezervaciją</button>
      </div>
      <div class="">
        <script>
          //$( document ).ready(function() {
            $( "#suniukas-1 #target" ).click(function() {
              var contactName = $( "#suniukas-1 input[name=vardas]" ).val();
              var contactTel = $( "#suniukas-1 input[name=telefonas]" ).val();
              $.ajax({url: "mail.php?vardas="+contactName+"&telefonas="+contactTel, success: function(result){
                $(".zinute").html(result);
              }});

            });
        //  });


      </script>
      </div>
    </div>
  </div>
</div>

  <div class="col-3 card suniukas-2 ml-4">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Šuniukas 2">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Marshal <img src="img/male.png" alt="Patinėlis"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
        <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-2">REZERVUOTI</a>
      </div>
    </div>
  </div>
  <!-- Modal -->
<div class="modal fade" id="suniukas-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suniukas-2">Užpildykite šią formą ir mes su Jumis susisieksime dėl rezervacijos patvirtinimo:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="row contact" action="index.html" method="post">
            <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="" value="">
            <input class="col-5 modal-body-rezervuoti " type="text" placeholder="Tel.nr." name="" value="">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Patvirtinti rezervaciją</button>
      </div>
    </div>
  </div>
</div>

  <div class="col-3 card suniukas-3 ml-4">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Card image cap">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Rublle <img src="img/male.png" alt="Patinėlis"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
         <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-3">REZERVUOTI</a>
      </div>
    </div>
  </div>
<!-- Modal -->
<div class="modal fade" id="suniukas-3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="suniukas-3">Užpildykite šią formą ir mes su Jumis susisieksime dėl rezervacijos patvirtinimo:</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form class="row contact" action="index.html" method="post">
          <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="" value="">
          <input class="col-5 modal-body-rezervuoti " type="text" placeholder="Tel.nr." name="" value="">
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Patvirtinti rezervaciją</button>
    </div>
  </div>
</div>
</div>
</div>

<div class="row">
  <div class="col-3 card suniukas-4">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Card image cap">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Zuma <img src="img/female.png" alt="Patelė"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
        <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-4">REZERVUOTI</a>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="suniukas-4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suniukas-4">Užpildykite šią formą ir mes su Jumis susisieksime dėl rezervacijos patvirtinimo:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="row contact" action="index.html" method="post">
            <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="" value="">
            <input class="col-5 modal-body-rezervuoti " type="number" placeholder="Tel.nr." name="" value="">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Patvirtinti rezervaciją</button>
      </div>
    </div>
  </div>
  </div>

  <div class="col-3 card suniukas-5 ml-4">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Card image cap">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Roki <img src="img/female.png" alt="Patelė"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
        <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-5">REZERVUOTI</a>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="suniukas-5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suniukas-5">Užpildykite šią formą ir mes su Jumis susisieksime dėl rezervacijos patvirtinimo:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="row contact" action="index.html" method="post">
            <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="" value="">
            <input class="col-5 modal-body-rezervuoti " type="number" placeholder="Tel.nr." name="" value="">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Patvirtinti rezervaciją</button>
      </div>
    </div>
  </div>
  </div>

  <div class="col-3 card suniukas-6 ml-4">
    <img class="card-img-top rounded mt-3" src="img/suniukas1.jpg" alt="Card image cap">
    <div class="card-body-suniukas1">
      <h5 class="card-title mt-3">Sky <img src="img/female.png" alt="Patelė"></h5>
      <p class="card-text">Mama Havana daugkartine Lietuvos čempionė.
      Tėvas Estas, tarptautinis Baltijos šalių čempionas.</p>
      <div class="mygtukas-rezervuoti">
        <a href="#" class="btn btn-primary mb-4" data-toggle="modal" data-target="#suniukas-6">REZERVUOTI</a>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="suniukas-6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suniukas-6">Užpildykite šią formą ir mes su Jumis susisieksime, dėl rezervacijos patvirtinimo:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="row contact" action="index.html" method="post">
            <input class="col-5 modal-body-rezervuoti" type="text" placeholder="Vardas, pavardė*" name="" value="">
            <input class="col-5 modal-body-rezervuoti " type="text" placeholder="Tel.nr." name="" value="">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Patvirtinti rezervaciją</button>
      </div>
    </div>
  </div>
  </div>

</div>
