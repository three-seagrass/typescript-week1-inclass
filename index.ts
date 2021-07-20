// #region ------ DataTypes
var planet: string = 'Earth';
var numOfWeeksInYear: number = 52;
var isLockDown: boolean = false;
var food: any = 'Noodles';
food = 1;
// #endregion

// #region ------ let and const
const animal: string = 'deer';
const numOfPlanets: number = 7;
const isNight: boolean = false;
let music: any = 'Punk Pop';
music = 5;
// #endregion

// #region ------ Class
class Student {
  firstName: string;
  lastName: string;
  id: number;
  age: number;

  constructor(
    _firstname: string,
    _lastname: string,
    _id: number,
    _age: number
  ) {
    this.firstName = _firstname;
    this.lastName = _lastname;
    this.id = _id;
    this.age = _age;
  }

  getFullName() {
    // This method of creating strings is called Template Literal
    // Read more about Template Literals here: https://www.w3schools.com/js/js_string_templates.asp
    return `${this.firstName} ${this.lastName}`;
  }
}
// ----------------- Instantiate an class
const s0: Student = new Student('Jane', 'Smith', 123, 25);
const s0FullName: string = s0.getFullName();
// #endregion

// #region ------ Arrays
const sports: string[] = ['soccer', 'basketball', 'baseball'];
const years: number[] = [2021, 2022, 2023, 2024, 2025];

// -------------------- Class Arrays
const s1: Student = new Student('Ci', 'Young', 729346, 30);
const s2: Student = new Student('Dave', 'Greene', 234532, 27);
const s3: Student = new Student('Priya', 'Khatri', 501137, 45);
const studentList: Student[] = [s1, s2, s3];
// #endregion

// #region ------ FizzBuzz
// grabbing the elements from the DOM (Html)
const fizzBuzzOutput: HTMLElement = document.getElementById('fizzbuzz-output');
const fizzbuzzRunBtn: HTMLElement = document.getElementById('fizzbuzz-run-btn');

// Detecting the 'click' event using 'addEventListener'
// Reference to addEventListener: https://www.w3schools.com/jsref/met_document_addeventlistener.asp
// When user clicks on the Run button, the 'fizzbuzz' function will executes
fizzbuzzRunBtn.addEventListener('click', fizzbuzz);

function fizzbuzz() {
  // grabbing the elements from the DOM (Html)
  // Typescript doesn't know that the 'startNumInput' and 'endNumInput' are HTMLInputElement, instead of 'HTMLElement'
  // Therefore, we are 'enforcing' the 'HTMLInputElement' type onto these elements using <HTMLInputElement>
  const startNumInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('start-num')
  );
  const endNumInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('end-num')
  );

  // Typescript thinks that the values from the DOM (Html) are string
  // Therefore, we need to 'cast' / 'convert' it to a Number
  const startNumVal: number = Number(startNumInput.value);
  const endNumVal: number = Number(endNumInput.value);

  // looping through the numbers and outputing the fizzbuzz to the DOM (Html)
  for (let i = startNumVal; i <= endNumVal; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizzBuzzOutput.innerHTML += '<p>fizzbuzz ' + i + '</p>';
    } else if (i % 3 == 0) {
      fizzBuzzOutput.innerHTML += '<p>fizz ' + i + '</p>';
    } else if (i % 5 == 0) {
      fizzBuzzOutput.innerHTML += '<p>buzz ' + i + '</p>';
    }
  }
}
// #endregion

// #region ------ Car Dropdown List
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

    // This if statement ensures that the speed of the car doesn't go over the maxSpeed that we have set
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

// creating instances of Car and then add it to carList
const car1: Car = new Car(0, '123abc');
const car2: Car = new Car(10, '456def');
const car3: Car = new Car(20, '789ghi');
const carList: Car[] = [car1, car2, car3];

const carSelect: HTMLElement = document.getElementById('car-select');

// looping through the carList array and adding 'option' to the carSelect
for (let i = 0; i < carList.length; i++) {
  // The value of the option should be set to the index (i) of the carList
  // So that we know which element of the carList is being selected using the index
  carSelect.innerHTML += `<option value=${i}>${carList[i].rego}</option>`;
}

// Detect the 'change' event using addEventListener
// When the user selects a new option from the select (dropdown), the 'change' event will triggers
// When the change event triggers, handleCarSelectChange function will executes
carSelect.addEventListener('change', handleCarSelectChange);

// Grabbing the cardSpeedOutput element
const carSpeedOutput: HTMLElement = document.getElementById('car-speed-output');

function handleCarSelectChange() {
  // Getting the value from the select (dropdown)

  // 'this' is a JavaScript keyword and it's weird...

  // We have used 'this' already in this project, see the Car class.
  // However, the way that 'this' is used in the Car class, and the way that 'this' is used on line 158 are different

  // 'this.speed' and 'this.rego' in the Car class refers to the data members/properties of the Car instances (e.g. c1, c2, c3)
  // Essentially when 'this' used inside a Class, it is referring to the variables within the 'scope' of that class instance
  // If you REALLY want to do a deepdive, you can read more here:
  // https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
  // https://fettblog.eu/this-in-javascript-and-typescript/

  // For our purposes within the 'handleCarSelectChange()' function, the 'this' refers to the NEAREST object
  // 'this' on line 158 refers to the object that we are listening to events (addEventLister) for.
  // The object we're 'listening for' is the nearest object, which in this case is the carSelect
  const selectedValue = this.value;

  // We set the value of each options of the select (dropdown) as the index of the carList
  // Therefore we are able to get the element of the carList using the selectedValue, then getting the speed of that element
  carSpeedOutput.innerHTML = `Speed: ${carList[selectedValue].speed}`;
}
// #endregion
