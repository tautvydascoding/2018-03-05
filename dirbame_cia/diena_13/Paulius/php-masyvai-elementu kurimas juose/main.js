console.log( " Labas ");

// 1.
//ka isves console.log ir zmogus.informacija(); funkcija




function getFunc() {
    var a = 7;
    return function(b) {
        alert(a+b);
    }
}
     var f = getFunc();
        f(5);

//function name(){
  //var x = "opel"; //lokalus
//}
//console.log();  // console isves ERROR, nes console.log yra uz f-jos ribu o kintamasis LOKALUS
