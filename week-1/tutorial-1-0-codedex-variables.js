// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Emily Herbert]
// Date: [01/12/2026]
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
const firstName = "Emily";
const favColor= "Green";
let currentLocation = "My couch";
let mood = "Silly";
console.log(firstName);
console.log(favColor);
console.log(currentLocation);
console.log(mood);
mood = "Serious";
console.log(mood);
// --------------------------------------------




// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
let companyName = "Incognito";
const foundingYear = "1996";
let isActive = true;
let fundingAmount;
console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);
// --------------------------------------------



// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
let fahrenheit = 46;
const celsius = (fahrenheit - 32)/1.8;
console.log(celsius);
// --------------------------------------------


// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
let billAmount = 65;
let tipPercentage = 20;
let tipAmount = billAmount * (tipPercentage / 100);
let total = billAmount + tipAmount;

console.log("==================================");
console.log("              RECEIPT            ");
console.log("----------------------------------");
console.log("           Order Details          ");
console.log("----------------------------------");
console.log("Item                      Price  ");
console.log("----------------------------------");
console.log("Dinner for two            " + billAmount);
console.log("----------------------------------");
console.log("Subtotal                  " + billAmount);
console.log("Tip                       " + tipAmount);
console.log("----------------------------------");
console.log("Total                     " + total);
console.log("==================================");
// --------------------------------------------



// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
let numSongs = 26;
let avgSongLength = 3.2;
let playlistDurMins = numSongs * avgSongLength;
let playlistDurHrs = Math.floor(playlistDurMins / 60);
let playlistDurRemMin = (playlistDurMins % 60).toFixed(2);
let playlistDurHrsMins = playlistDurHrs + " hours and " + playlistDurRemMin + " minutes";

console.log("Playlist Information");
console.log("Number of Songs: "+ numSongs);
console.log("Average Song Length: " + avgSongLength);
console.log("Playlist Duration: " + playlistDurHrsMins);

// --------------------------------------------