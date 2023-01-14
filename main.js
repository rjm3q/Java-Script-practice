function getBiggest(x,y){
  // Math.max finds the largest int
  return Math.max(x,y)
}

function greeting(language) {
// case and default allow for easy choices
  case "German":
    greeting = "guten Tag!";
  case "Mandarin":
    greeting ="Ni Hao";
  case "Spanish":
    greeting ="Hola!";
  default ="Hello";
return greeting
}

function isTenOrFive(num){
  // an if/else statement should do the trick
  // but the shorthand version is better 
return(num === 10 || num=== 5)?true:false;


function isInRange(num){
if (num >= 20 or =< 50){
  return true;
} else{
  return false
}
}

function isInterger(num){
  // i dont get how this is working, copied from the web 
  return (num === parseInt(num, 10)) ? true : false;
}

function fizzBuzz(num){
let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (i in num){
  if(num%i===0){
    return false
  }
if (num===0||num===1){
  return false
}
}
}

function isPrime(num){
  
}
