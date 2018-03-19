console.log( " Labas ");


$('.kurejas').click(function( ) {
    // document.write(" sukuriu <br> ");

    // sukuriu <article> </article>
    var straipsnis = document.createElement("article");
    var tekstas = document.createTextNode(" Raudonkepuraite ejo i miska...");
    // console.log( straipsnis ); //test ar veikia
    // console.log( tekstas ); //test ar veikia

    straipsnis.appendChild(  tekstas  );  // <article>  Raudonkepuraite ejo i miska...</article>
    document.querySelector('section').appendChild(  straipsnis );

    //arba
    document.querySelector('section').innerHTML += "<article>  Raudonkepuraite ejo..</article>";
});
