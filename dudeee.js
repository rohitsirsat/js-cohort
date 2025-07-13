// let fname = "rohit";
// let fname2 = fname;
// console.log("fname: ", fname);
// fname2 = "virat";
// console.log("fname2: ", fname2);
// import crypto from "crypto";

// async function test() {
//   return "hello";
// }

// test().then(console.log);

// const dude = crypto.randomBytes(32).toString("hex");
// console.log(dude);

const chaiTypes = ["black", "green", "oolong"];

const moreChaiTypes = [...chaiTypes, "white", "herbal"];

// const newArr = chaiTypes.concat(moreChaiTypes);

// console.log(newArr);
// console.log(moreChaiTypes);

const arr = [1, [6, 7, 8], 3, 4, 5];

// const newArr = [...arr];

// console.log("original arr ", arr);
// console.log("new array ", newArr);

// arr[1] = 9;
// console.log("original arr after update", arr);
// console.log("new array after update", newArr);

function test() {
  let x = 10;
  return function () {
    x++;
    console.log(x);
  };
}

// const increment = test();
// increment();
// increment();
// increment();

const getJudge0LanguageId = (Language) => {
  const languageMap = {
    PYTHON: 71,
    JAVA: 62,
    JAVASCRIPT: 63,
  };
  return languageMap[Language.toUpperCase()];
};

console.log(getJudge0LanguageId("javascript"));
