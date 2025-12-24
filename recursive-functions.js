function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const result1 = factorial(4);
console.log(result1);

function fibonachi(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonachi(n - 1) + fibonachi(n - 2);
  }
}
const result2 = fibonachi(8);
console.log(result2);

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
sum(5);

function sumArray(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}
sumArray([1, 2, 3, 4]);

let result = 1;
for (let i = 1; i <= 5; i++) {
  result *= i;
}
