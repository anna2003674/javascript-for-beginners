const income = 100;
const age = 19;
if (income > 50 && age > 18) {
  console.log("доход больше 50");
  console.log("возраст больше 18");
}

let myVar1 = 89;
if (myVar1) {
  console.log(`Переменная myVar имеет значение: ${myVar1}`);
}

let myVar2;
if (myVar2) {
  console.log(`Переменная myVar имеет значение: ${myVar2}`);
}

const income1 = 50;
if (income1 > 50) {
  console.log("Доход больше 50");
} else if (income1 === 50) {
  console.log("Доход равен 50");
} else {
  console.log("Доход меньше 50");
}

let income3 = 200;
switch (income3) {
  case 100:
    console.log("Доход равен 100");
    income3 += 100;
  case 200:
    console.log("Доход равен 200");
    income3 += 100;
  case 500:
    console.log("Доход равен 500");
    income3 += 100;
}
console.log("Финальный доход равен", income3);
