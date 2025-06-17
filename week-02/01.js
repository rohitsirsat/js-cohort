let p1 = {
  fname: "rohit",
  // marks: [90, 80, 70, 60],
  // calculate: function () {
  //   console.log(2 + 4);
  // },
};

// it's a shallow copy
// let p2 = {
//   ...p1,   // spread operator (it can't  copy inner objects)
// };

// Deep copy
// let p2 = JSON.parse(JSON.stringify(p1));

// converiting objet in string is known as serialization and string to object is known as deserialization

let p2 = p1;

p2.fname = "virat";

console.log(p2);
console.log(p1);
