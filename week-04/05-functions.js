function greet(name) {
  console.log(`Hello ${name}`);
}

// greet("Hitesh");
// greet("Piyush");

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  console.log(blockScopedVar);
}

// modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

let person1 = {
  personsName: "ravi",
  greet: function () {
    console.log(`Hello, ${this.personsName}`);
  },
};

let person2 = {
  personsName: "hitesh",
};

// call() to give the context for "thisssss"
person1.greet.call(person2);

// Learn about JS INTERNALS ([call stack, global execution context --> (memory phase and code phase)], [call back queue, microtask  queue, event loop])
