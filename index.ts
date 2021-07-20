// const output: HTMLElement = document.getElementById('output');
// const button: HTMLElement = document.getElementById('custom-btn');
// button.addEventListener('click', fizzbuzz);

// function fizzbuzz() {
//   const startNumInput: HTMLInputElement = <HTMLInputElement>(
//     document.getElementById('start-num')
//   );
//   const startNumVal: number = Number(startNumInput.value);

//   for (let i = startNumVal; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       output.innerHTML += '<p>fizzbuzz ' + i + '</p>';
//     } else if (i % 3 == 0) {
//       output.innerHTML += '<p>fizz ' + i + '</p>';
//     } else if (i % 5 == 0) {
//       output.innerHTML += '<p>buzz ' + i + '</p>';
//     }
//   }
// }

// class Student {
//   firstName: string;
//   lastName: string;
//   id: number;
//   age: number;

//   constructor(
//     _firstname: string,
//     _lastname: string,
//     _id: number,
//     _age: number
//   ) {
//     this.firstName = _firstname;
//     this.lastName = _lastname;
//     this.id = _id;
//     this.age = _age;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const student1: Student = new Student('Jane', 'Smith', 123, 25);

// console.log(student1.firstName);
// console.log(student1.lastName);
// console.log(student1.getFullName());

class Car {
  speed: number;
  rego: string;
  maxSpeed: number = 120;

  constructor(_speed: number, _rego: string) {
    this.speed = _speed;
    this.rego = _rego;
  }

  increaseSpeed(spd: number): void {
    this.speed += spd;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

let innerHtml: string = '';

const output: HTMLElement = document.getElementById('output');
const sports: string[] = ['soccer', 'basketball', 'baseball'];

for (let i = 0; i < sports.length; i++) {
  innerHtml += `<p> ${sports[i]} </p>`;
}
output.innerHTML = innerHtml;

// const car1: Car = new Car(10, '123abc');
// console.log(car1);
// car1.increaseSpeed(140);
// console.log(car1);

class Planet {
  name: string;
  numOfMoons: number;

  constructor(_name: string, _numOfMoons: number) {
    this.name = _name;
    this.numOfMoons = _numOfMoons;
  }
}
