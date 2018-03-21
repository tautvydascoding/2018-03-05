// papildomos uzduotys:
// reik sukurti f-jas, kurios spres uzdavinius. pvz.:
// function is_arra( x )    kuri grazina atsakuma ar paduotas 'x' yra masyvas (return true;) ar nemasyvas (return false;)

// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

//1 uzd. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor

var aa=[1,2,3];
var aaa=[0,"tiesa",4];
var aaaa=[];
var bb="Labas";
var bbb=40;
var bbbb=["labas","mech","trecias",4,66,"obyolys",7];

function is_arra(x){
  if (x.constructor===Array) {
    // console.log("Paduotas duomuo:",x,"yra masyvas;");
    return true;
  }else {
    // console.log("Paduotas duomuo:",x,"nera masyvas;");
    return false;
  }
}

console.log(is_arra(aa));
console.log(is_arra(aaa));
console.log(is_arra(aaaa));
console.log(is_arra(bb));
console.log(is_arra(bbb));


//2 Uzduotis  Write a JavaScript function to clone an array
function copyarray(x){
  return x.slice(0);
}
console.log("Nukopijuotas masyvas: ",copyarray(bbbb));


//3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function getfirst(xarray,n){
  if (n<0) {
    return console.log("Masyvo elemntu kiekis negali buti neigiamas");
  }
  if (xarray.constructor!==Array) {
    return console.log("Negalime iskirpti elemntu is objekto, kuris nera masyvas");
  }
  return xarray.slice(0,n);
}

console.log("Grazinam masyvo elementus iki pasirinkto elemento",getfirst(bbbb,2));


//4 uzd Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

function getlast(xarray,n){
  if (n<0) {
    return console.log("Masyvo elemntu kiekis negali buti neigiamas");
  }
  if (xarray.constructor!==Array) {
    return console.log("Negalime iskirpti elemntu is objekto, kuris nera masyvas");
  }
  return xarray.slice(xarray.length-n,xarray.length);
}
console.log(getlast(bbbb,3));

//5 uzduotys
// Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
var myColor = ["Red", "Green", "White", "Black"];
function joinarraytostring(x){
  return x.join('+');
}
console.log(joinarraytostring(myColor));

//6 Uzd Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 // For example if you accept 025468 the output should be 0-254-6-8

function putter(x){
  if (x.constructor!==Number) {
    console.log("Duotoji reiksme nera skaicius");
  }else {
      var temp=(''+x);
      console.log("Nepakeistas skaicius",temp+";");
      for (var i = 0; i < temp.length; i++) {
          if (temp[i]%2==0 && temp[i+1]%2==0) {
              temp=temp.slice(0,i+1)+"-"+temp.slice(i+1,temp.length);
              // i++;
            }
          }
          console.log("Pertvarkytas skaicius (tarp lygyniu skaiciu ideti '-'):\n ",temp+";");
        }
}
var a = 44443255554488440;
var b = 12243579988100324;
putter(a);
putter(b);



// Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function sortarray(x){
  var sum=0;
  var temp=0;
  if (x.constructor!==Array) {
    console.log("Bandote isrikiuoti ne masyva");
  }else { if (x.lenght==0) {
      console.log("Jusu masyvas yra tuscias");
  }else {
      for (var i = 0; i < x.length; i++) {
        for (var k = 0; k < x.length; k++) {
          if (x[i]<=x[k]) {
            temp=x[i];
            x[i]=x[k];
            x[k]=temp;
          }
        }
      }
    }
      console.log("Pertvarkytas masyvas didejimo tvarka yra:",x+";");
    }
}

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr2 = [];
sortarray(arr1);
sortarray(arr2);


// Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// Click me to see the solution
