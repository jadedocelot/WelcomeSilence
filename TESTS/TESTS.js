////GREETING SCRIPT////
var today = new Date(); // create a new date object   
var hourNow = today.getHours(); // find the current hour
var greeting;

if (hourNow > 18) {  ////< if hourNow is GREATER than 18 you will be greeted with 'Good evening
   greeting = 'Good evening!';  
////\/ else if =  BUT IF hourNow is GREATER than 12 then greet user with "Good afternoon"
} else if (hourNow > 12) { 
    greeting = 'Good afternoon!';

} else if (hourNow > 0) {
    greeting = 'Good morning!';

} else {
 greeting = 'Welcome!';

}

document.write('<h1>' + greeting + '</h1>'); 
///GREETING SCRIPT END//////

///ASSIGN VAR///
var username; // VAR are DECLARED
var message;
username = 'Edgar' ; // STRINGING the VAR
message = 'See you in hell.' ;

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

///ASSIGN VAR END///

/* Using a VAR to store a BOOLEAN*/
var inStock;
var shipping;
instock = true; //// BOOLEANS consist of TRUE or FALSE (otherwise an ON/OFF switch, In this line a BOOLEAN has been assigned to a VAR)
shipping = false;

var elStock = document.getElementById('stock') ;
elStock.className = inStock;  

var elShip = document.getElementById('shipping');
elShip.className = shipping; 
/* Using a VAR to store a BOOLEAN*/

/*SHORTHAND VAR ASSIGN METHODS*/

/////METHOD 1 ////
var price = 5;
var quantity = 14;
var total = price * quantity;


price = 10;

/////METHOD 2////

var price, quantity, total; ////THREE VAR are declared 
price = 5;/// ONE VAR is assigned a value
quantity = 14;
total = price * quantity; 

/////METHOD 3////

var price = 5, quantity = 14; ///TWO VAR are declared and assigned values on the same line
var total = price * quantity; // ONE VAR is delared and assigned a value 

/////METHOD 4??////
var el = document.getElementById('cost');
el.textContent = '$' + total; 

/*SHORTHAND VAR ASSIGN METHODS END*/

/*Creating an ARRAY LITERAL*/ /////REVIEW PREFERRED METHOD //an array is great for when you are working a "LIST" of set values
var colors; 
colors = ['white', 'black', 'custom']; //// an array of values

var el = document.getElementById('colors');
el.textContent = colors[0];
//// ANOTHER LAYOUT FOR ARRAY LITERAL below 
colors = ['white',
           'black',
           'custom'];
/*Creating an ARRAY LITERAL END*/


/* Creating an ARRAY CONSTRUCTOR */ 

var colors = new Array('black', //0
                        'white',//1
                        'custom');//2
///This array listed above is actually numbered list startings with 0-2

var itemThree;
itemThree = colors[2]; ///This will then pick-up the 'Custom' value listed above

var el = document.getElementById('colors');
el.textContent = colors[0];
 /* Creating an ARRAY CONSTRUCTOR END*/

 /* Using artithmetic operators */ 

var subtotal = (5 + 5) * 3;  // SUBTOTAL is 30
var shipping = 0.5 * (13 + 1); // SHIPPING is 7 

var total = subtotal + shipping; // GRANDTOTAL is 37

var elSub = document.getElementById('subtotal');     /////elSub is declared and will search the HTML file for ID="subtotal"
elSub.textContent = subtotal; ///elSub  will place subtotal value in place of HTML ID="subtotal"

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('grandTotal');
elTotal.textContent = total;

 /* Using artithmetic operators END*/ 

 /* Increment/decrement a number (To add 1) */

myVar = 87;

myVar++; ////1 will be added. myVar now = 88

MyVar = 87;
MyVar--; //1 will be subtracted. myVar now = 86 
/* Increment a number (To add 1) */