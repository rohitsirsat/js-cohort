// // array literal syntex
// let fruits = ["apple", "cherry", "banana"];

// // using array constructor
// let moreFruits = new Array("mango", "kiwi");

// usign literal syntax
let fruits = ["apple", "cherry", "banana"];
console.log(fruits.length); // 3
console.log(fruits[0]); // "apple"

// using array constructor
let emptyFruits = new Array(3);
console.log(emptyFruits.length); // 3
console.log(emptyFruits[0]); // undefined

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i} is ${fruits[i]}`);
}
