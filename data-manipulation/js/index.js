  // PART 1 NEW CODE
  // The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
const isNoOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Additional checks
const isDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
const isFirstLargerThanLast = n1 > n4;

// Arithmetic chain
const arithmeticResult = ((n2 - n1) * n3) % n4;

// Final validation
const isValid = isSum50 && isTwoOdd && isNoOver25 && isUnique && isDivisibleBy5 && isFirstLargerThanLast;

// Finally, log the results.
console.log(isValid);

//PART 2
// Constants
const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars
const speeds = [55, 60, 75]; // miles per hour
const efficiencies = [30, 28, 23]; // miles per gallon

// Function to calculate fuel needed for the entire trip
function calculateFuelNeeded(speed, efficiency) {
    return totalDistance / (speed / efficiency);
}

// Function to calculate total cost of fuel for the entire trip
function calculateFuelCost(fuelNeeded) {
    return fuelNeeded * fuelCostPerGallon;
}

// Function to calculate trip duration in hours
function calculateTripDuration(speed) {
    return totalDistance / speed;
}

// Calculate and log results for each speed
for (let i = 0; i < speeds.length; i++) {
    const speed = speeds[i];
    const efficiency = efficiencies[i];

    const fuelNeeded = calculateFuelNeeded(speed, efficiency);
    const fuelCost = calculateFuelCost(fuelNeeded);
    const tripDuration = calculateTripDuration(speed);

    console.log(`At ${speed} mph:`);
    console.log(`- Gallons of fuel needed: ${fuelNeeded.toFixed(2)}`);
    console.log(`- Total fuel cost: $${fuelCost.toFixed(2)}`);
    console.log(`- Trip duration: ${tripDuration.toFixed(2)} hours`);
    console.log();
}

// Determine if budget is enough for the trip
const maxFuelCost = Math.max(...efficiencies) * (totalDistance / Math.min(...speeds)) * fuelCostPerGallon;
const budgetIsEnough = fuelBudget >= maxFuelCost;
console.log(`Budget is enough for the trip: ${budgetIsEnough ? 'Yes' : 'No'}`);

