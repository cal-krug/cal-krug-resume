// Create a temperature variable and set it to 80
temperature = 80;

// Write a statement that outputs the temperature as "The temperature is 80 degrees."
console.log("The temperature is 80 degrees.");

// If the temp is greater than 80, output "time to swim" (set temp to 60, 90) and test.

// if (temperature > 80) {
//     console.log("time to swim");
// }

// Create a precipitation variable and set it to false.
precipitation = false;

// Only output "time to swim" if temp is greater than 80 and it's not raining.

// if (temperature > 80 && precipitation == false) {
//     console.log("time to swim");
// }

// Set the precipitation variable to "raining" or "snowing" and
// only output "time to swim" if there is no precipitation.
precipitation = "raining";

if (temperature > 80 && precipitation == false) {
    console.log("time to swim");
}

// Create an "indoors" variable and set it to true.
indoors = true;

// If indoors, then output "time to swim" regardless of the temp and precipitation.
if (indoors == true) {
    console.log("time to swim");
}