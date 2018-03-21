
// 1. sukurti "header"  DOM objekta/NODE'a
// test
// console.log(  manoHeader );

$('.kurejas').click(function() {
  console.log("sukuriu <br>");
  // document.write("sukuriu <br> ");
  var straipsnis = document.createElement("article");
  console.log(straipsnis);

  var tekstas = document.createTextNode("Raudonkepuraite ejo i miska.");
  console.log(tekstas);

  document.querySelector('section').appendChild(straipsnis);
  straipsnis.appendChild(tekstas);
});



// 2. sukurti 'tekstas' kintamaji ir sukurti teksto Node : panaudojant js document.createTextNode(xxx)


// 3. i susikuta 'header' objekta idedame 'tekstas' objekta
// test
// console.log(  manoHeader );
function kurtihead(){
  var head = document.createElement("Header");
  document.querySelector("body").appendChild(head);
  var tekstas = document.createTextNode("Welcome to mine domain!");
  head.appendChild(tekstas);
  var temp=document.querySelector('h1');
  // console.log(temp);
  document.querySelector('body').insertBefore(head,temp);
  // document.insertBefore(head,null);
}
kurtihead();



// 4. headeri idesime virs H1

// / insertBefore(kaIdeti, PrieKa) -
