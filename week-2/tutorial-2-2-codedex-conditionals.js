
// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Emily Herbert]
// Date: [1/21/26]
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"

let num = Math.random();
console.log(num);
if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// -------------------------------------------




// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines

let hr = 8;
if (hr < 12){
  console.log("Good morning 🌞");
  console.log("Time to brush your teeth!");
  console.log("Check the weather before getting dressed.");
  console.log("And don't forget to feed the bunnies!");
}

// --------------------------------------------




// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting

let hour = 13;
if (hour < 12){
  console.log("Good morning 🌞");
  console.log("Time to brush your teeth!");
  console.log("Check the weather before getting dressed.");
  console.log("And don't forget to feed the bunnies!");
}else{
  console.log("Good afternoon ☁️");
  console.log("Eat a nourishing lunch");
  console.log("Pack your essentials in your purse.");
  console.log("Don't be late for work!");
}
// --------------------------------------------




// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions

let pH = 5;
if(pH > 7){
  console.log("Basic");
}else if(pH < 7){
console.log("Acidic");
}else{
  console.log("Neutral");
}
// --------------------------------------------




// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer

let magicNum = Math.floor(Math.random() * 10);
//console.log(magicNum);

if(magicNum == 1){
console.log("Yes - definitely.");
}else if(magicNum == 2){
console.log("It is decidedly so.");
}else if(magicNum == 3){
  console.log("Without a doubt.");
}else if(magicNum == 4){
  console.log("Reply hazy, try again.");
}else if(magicNum == 5){
  console.log("Ask again later.");
}else if(magicNum == 6){
  console.log("Better not tell you now.");
}else if(magicNum == 7){
  console.log("My sources say no.");
}else if(magicNum == 8){
  console.log("Outlook not so good.");
}else{
  console.log("Very doubtful.");
}
// --------------------------------------------




// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.

let aqi = 46;

if(aqi >= 0 && aqi <= 50){
  console.log("good");
}else if(aqi > 50 && aqi <= 100){
  console.log("moderate");
}else if(aqi > 100 && aqi <= 150){
  console.log("unhealthy (sensitive groups)");
}else if(aqi > 150 && aqi <= 200){
  console.log("unhealthy");
}else if(aqi > 200 && aqi <= 300){
  console.log("very unhealthy");
}else{
  console.log("hazardous");
}
// --------------------------------------------




// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals

// 0 represents rock
// 1 represents paper
// 2 represents scissors
let player = 0;

let computer = Math.floor(Math.random() * 3);

if(player == computer){
  console.log("tied!");
}
else if(player == 0 && computer == 1){
  console.log("player picked: rock");
  console.log("computer picked: paper");
  console.log("the computer won!"); 
}
else if(player == 0 && computer == 2){
  console.log("player picked: rock");
  console.log("computer picked: scissors");
  console.log("the player won!"); 
}
else if(player == 1 && computer == 0){
  console.log("player picked: paper");
  console.log("computer picked: rock");
  console.log("the player won!"); 
}
else if(player == 1 && computer == 2){
  console.log("player picked: paper");
  console.log("computer picked: scissors");
  console.log("the computer won!"); 
}
else if(player == 2 && computer == 0){
  console.log("player picked: scissors");
  console.log("computer picked: rock");
  console.log("the computer won!"); 
}
else if(player == 2 && computer == 1){
  console.log("player picked: scissors");
  console.log("computer picked: paper");
  console.log("the player won!"); 
}
// --------------------------------------------
