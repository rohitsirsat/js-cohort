// let, const ==> need space to store data

// string
let name = "Rohit";

// number
let age = 25.4;

// boolean --> true, false
let isPaid = true;

// null (type of null is -->> object)
let favouriteClass = null; // nothing

// undefined
let homeTown;

// array {type of array is -->> object}
let skills = [1, 4, "hee", true];

// object
let studentProfile = {
  name: "Rohit",
  age: 22,
  isPaid: true,
  skills: ["html", "css"],
  favouriteClass: null,
};

// function (type of function is -->> function)
function prinname(name) {
  console.log(name);
}

/**
 * @description primitive data types:
 *
 * 1) string,
 * 2) number,
 * 3) boolean,
 * 4) null,
 * 5) undefined
 * 6) Symbol
 * 7) BigInt
 *
 * @description non-primitive data types:
 *
 * array,
 * object
 *
 *
 */

console.log(typeof prinname);
