function print() {
  console.log("Доброе утро");
  print = function () {
    console.log("Добрый день");
  };
}
print(); // Доброе утро
print(); // Добрый день

function printHello() {
  console.log("Доброе утро");
  print = function () {
    console.log("Добрый день");
  };
}
const printMessage = printHello;
printHello(); // Доброе утро
printHello(); // Добрый день
printMessage(); // Доброе утро
printMessage(); // Доброе утро

function sayHi() {
  console.log("Привет");
}
function sayHi() {
  console.log("Hello");
}
sayHi();

let sum = function (a, b) {
  return a + b;
};
sum = function (a, b) {
  return a * b;
};
sum(2, 3);

function greet() {
  console.log("Привет");
}
function test() {
  function greet() {
    console.log("Hello");
  }
  greet();
}
greet();
test();

const user = {
  say() {
    console.log("Привет");
  },
};
user.say = function () {
  console.log("Hello");
};
user.say();
