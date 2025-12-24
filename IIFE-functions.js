(function () {
  console.log("IIFE выполнена");
})();

(() => {
  console.log("Arrow IIFE");
})();

(function (name) {
  console.log(`Привет, ${name}`);
})("Аня");

const counter = (function () {
  let count = 0;
  return {
    inc() {
      count++;
      return count;
    },
    dec() {
      count--;
      return count;
    },
  };
})();

counter.inc();
counter.inc();
counter.dec();
