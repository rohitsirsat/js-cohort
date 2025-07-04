/**
 *  proxy ==> @description The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.
 *
 */

// const user = {
//   name: "Rohit",
//   age: 23,
//   password: "1234",
// };

// const proxyUser = new Proxy(user);

let arr = [1, 2, 3, 4, 5];

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      // just to comfirm that work is done
      return true;
    },
  });
}

let negArr = negativeIndex(arr);
console.log(negArr[1]);
console.log(arr[-3]);
