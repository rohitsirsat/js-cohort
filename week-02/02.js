/** POLYFILL'S */

// forEach()
if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

const arr = [1, 2, 3];

// arr.myforEach((value, index) => {
//   console.log(`Value at index ${index} is ${value}`);
// });

// arr.forEach((value, index) => {
//   console.log(`Value at index ${index} is ${value}`);
// });

// map()

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const result = cb(this[i], i);
      newArr.push(result);
    }
    return newArr;
  };
}

// const res = arr.map((i) => {
//   return i * 2;
// });

// const res = arr.myMap((e) => e * 2);

// console.log(res);

// Filter
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

const res = arr.myFilter((e) => {
  return e % 2 == 0;
});

console.log(res);
