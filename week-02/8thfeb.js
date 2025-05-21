// Problem: Create an array containing different types of teas.
const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];
console.log("Teas: ", teas);

// Problem: Add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("Oolong Tea");
if (index > -1) {
  teas.splice(index, 1);
}

// Problem: Filter the list to only include teas that are caffeinated.
const caffeinated = teas.filter((tea) => tea !== "Herbal Tea");
console.log("Caffeinated teas: ", caffeinated);
console.log("All teas: ", teas);

// Problem: Sort the list of teas alphabetically.
const sortedTeas = teas.sort();
console.log("Sorted teas: ", sortedTeas);

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log("heeee:  ", teas[i]);
}

// Problem: Ues a for loop to count how many teas are caffeinated. (excluding 'Herbal Tea)
let caffeinatedTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedTeas++;
  }
}
console.log("Number of caffeinated teas: ", caffeinatedTeas);

// Problem: Use a for loop to create a new array with all tea names in uppercase
const newArrayOfTeas = [];
for (let i = 0; i < teas.length; i++) {
  newArrayOfTeas.push(teas[i].toUpperCase());
}

// Problem: Use a for loop to find tea name with the most characters.
const longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea) {
    longestTea = teas[i];
  }
}

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i++) {
  reversedArray.push(teas[i]);
}
