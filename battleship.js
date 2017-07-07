
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;
while(isSunk == false){
var guess = prompt("enter a number from 0-6");
if(guess<0 || guess>6)
 alert("enter a valid number");
else 
   guesses=guesses+1;
 if(guess==location1 || guess==location2 || guess==location3){
alert("HIT");
hits=hits+1;
if(hits==3){
isSunk=true;
alert("you sank my Battleship");}
 } else {
alert("MISS");	 
}
}
var stats="you took " + guesses + " guesses to sink the battleship," + " and shooting accuracy was " + (3/guesses);
alert(stats); 