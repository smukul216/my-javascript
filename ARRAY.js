var scores={60,50,40,20,30,20,18,75,56};
function printAndGetHighScore(scores){
var highscore=0;
var output;
for(var i=0;i<scores.length;i++){
  output="bubble solution" + i + "score: " + scores[i];
console.log(output);
if(scores[i]>highscore){
 highscore=scores[i];
}
}
return highscore;}

function getBestResults(scores,highscore){
var bestsolutions=[];
for(var i=0;i<scores.length;i++){
if(scores[i]==highscore){
bestsolutions.push(i);}
}
return bestsolutions;}

var highScore=printAndGetHighScore(scores);
console.log("highest bubble score:" + highScore);
var bestSolutions= getBestResults(scores,highScore);
console.log( "solutions with highest score:" + bestSolutions);
 
