class Animal {
  #name;

  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Animal — абстрактный класс");
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    if (!newName || typeof newName !== "string") {
      throw new Error("Имя должно быть непустой строкой");
    }
    this.#name = newName;
  }

  speak() {
    throw new Error("Метод speak() должен быть реализован");
  }
}

class Cat extends Animal {
  #color;

  constructor(name, color) {
    super(name);
    this.#color = color;
  }

  getColor() {
    return this.#color;
  }

  speak() {
    console.log(`${this.getName()} (кот, ${this.#color}) говорит: Мяу`);
  }
}

class Dog extends Animal {
  #energy = 100;

  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.getName()} (пёс) говорит: Гав`);
  }

  run() {
    if (this.#energy <= 0) {
      console.log(`${this.getName()} устал и не может бежать`);
      return;
    }
    this.#energy -= 25;
    console.log(`${this.getName()} бежит. Энергия: ${this.#energy}`);
  }

  rest() {
    this.#energy = Math.min(this.#energy + 40, 100);
    console.log(`${this.getName()} отдыхает. Энергия: ${this.#energy}`);
  }

  getEnergy() {
    return this.#energy;
  }
}

const animals = [new Cat("Барсик", "рыжий"), new Dog("Рекс", "овчарка")];

animals.forEach((animal) => animal.speak());

const dog = animals[1];
dog.run();
dog.run();
dog.rest();

console.log(`Текущая энергия: ${dog.getEnergy()}`);
