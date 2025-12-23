const number1 = "56";
const number2 = 4;
const result = number1 + number2;
console.log(result); // 564

// parseInt
const number3 = "56";
const number4 = 4;
const result2 = parseInt(number3) + number4;
console.log(result2); // 60

const num1 = "123hello";
const num2 = parseInt(num1);
console.log(num2); // 123

const n1 = "javascript";
const n2 = "22";
let res1 = isNaN(n1);
console.log(res1); // true - num1 не является числом

res1 = isNaN(n2);
console.log(res1); //  false - num2 - это число

// parseFloat
const numb1 = "46.07";
const numb2 = "4.98";
let res2 = parseFloat(numb1) + parseFloat(numb2);
console.log(res2); //51.05
