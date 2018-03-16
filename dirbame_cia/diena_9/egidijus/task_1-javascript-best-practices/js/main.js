// Declare at the beginning
// ----------------------------
// var firstName, lastName, price, discount, fullPrice; -- //issivardinti pagrindinius kintamuosius failo virsuje

// Use later
// ----------------------------
// firstName = "John";
// lastName = "Doe";

// price = 19.90;
// discount = 0.10;

// fullPrice = price * 100 / discount;

//--------------------------------------------------------------------------------------------

// Declare and initiate at the beginning
//-----------------------------
// var firstName = "",				// Give cleaner code
//     lastName = "",  				// Provide a single place to initialize variables
//     price = 0,					// Avoid undefined values
//     discount = 0,
//     fullPrice = 0,
//     myArray = [],
//     myObject = {};

//--------------------------------------------------------------------------------------------
// When doing mathematical operations, JavaScript can convert numbers to strings:
//-----------------------------
// var x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
// var x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
// var x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
// var x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
// var x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
// var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
// var x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number

//--------------------------------------------------------------------------------------------

// Use === Comparison
//-----------------------------
// 0 == "";        // true
// 1 == "1";       // true
// 1 == true;      // true

// 0 === "";       // false
// 1 === "1";      // false
// 1 === true;     // false


//   array          0         1         2
// var myList = ['apples','oranges','bananas'];

var myList = ['Iki','Maksima','Rimi','Lidlas'];
	myList[4] = 'centukas'
	myList[5] = 'Hyper Maxima';
	myList[6] = 'Prisma';
	myList[1] = 'Barbora';
	console.log(myList);

// var x = myList[2];             //

// 	myList[2] = myList[3];
// 	myList[3] = x;
// 	console.log(myList);

function sukeitimas(nr1, nr2) {
	var x = myList[nr1];
	var y = myList[nr2]

	myList[nr2] = x;
	myList[nr1] = y;
}
sukeitimas(4, 1);
console.log(myList);