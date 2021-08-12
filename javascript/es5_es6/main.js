// //////////////////////////////////////////////11. let & var & const//////////////////////////////////////////////

// let name1 = "Olan";

// if (true) {
//   let name1 = "Seen";
//   console.log(name1);
// }

// console.log(name1);

// const fruit = "Banana";
// // fruit = 'aa'

// const person = {};
// person.name = "Olan";
// console.log(person);

// //////////////////////////////////////////////12. Multi-line String & Expression interpolation//////////////////////////////////////////////

// //Multi-line String

// const str = "In ES6" + "Multi-line is Okay.";
// const str2 = `In ES6
// Multi-line is
// Okay.
// `;

// console.log(str);
// console.log(str2);

// //Expression interpretation

// const firstname = "Robot";
// const lastname = "TrippleX";
// const date = new Date();
// const great = "Hello" + firstname + " " + lastname + ", how are you?" + date;
// const great2 = `Hello ${firstname + "" + lastname}, how are you? ${date}`;
// console.log(great);
// console.log(great2);

// //////////////////////////////////////////////13. Destructuring assignment //////////////////////////////////////////////
// // Array Destructuring
// const arr = [1, 2];
// const a = arr[0];
// const b = arr[1];

// const [c, d] = arr;
// console.log(c);
// console.log(d);

// const oneToFive = [1, 2, 3, 4, 5];
// const [a1, , c1] = oneToFive;
// console.log(c1);

// const [a2, b2, ...rest] = oneToFive;
// console.log(rest);

// //////////////////////////////////////////////14. Rest parameters //////////////////////////////////////////////

// function howManyArgs(...args) {
//   console.log(args.length);
// }

// howManyArgs(1);
// howManyArgs(1, 1, 1, 1, 1, 1);

// function multply(multple, ...array) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] *= multple;
//   }
//   console.log(array);
// }

// multply(3, 100, 300, 300, 300);

//////////////////////////////////////////////15. Spread Operators //////////////////////////////////////////////
// function add(x, y, z) {
//     return x + y + z;
// }

// const sum1 = add(1, 2, 3);
// console.log("1|", sum1);

// const numbers = [2, 4, 6];
// const sum2 = add(numbers[0], numbers[1], numbers[2]);
// const sum3 = add(...numbers);
// console.log("sum2|", sum2);
// console.log("sum3|", sum3);

// const arr = [4, 5, 6];
// const append = [1, 2, 3, ...arr];
// const append2 = [...arr, 1, 2, 3];
// console.log("append|", append);
// console.log("append2|", append2);

// // Spread Object
// var obj1 = { foo: "bar", x: 42 };
// var obj2 = { foo: "baz", y: 13 };

// var clonedObj = { ...obj1, ...obj2 };

// console.log("clonedObj|", clonedObj);

// var {foo, x ,y} = obj1;
// console.log(foo, x, y);

// var {foo:foo2, x:x2, y:y2} = obj1;
// console.log(foo2, x2, y2);

//////////////////////////////////////////////16. Default Parameters //////////////////////////////////////////////
// function howareyou(mood = "happy") {
//   console.log(mood);
// }

// howareyou();
// howareyou("sad");

// let [x, y] = [1, 2];
// console.log("1|", x, y);

// let [x1, y1] = [1];
// console.log("2|", x1, y1);

// let [x2, y2=3] = [1];
// console.log("3|", x2, y2);

// let [x3=3, y3=3] = [];    //ทำจากขวาไปซ้าย
// console.log("4|", x3, y3);

// const [{ prop: x1 = 10 }] = [{ prop: undefined }];
// console.log(x1);

// const [{ prop: x2 = 10 } = {}] = [];
// console.log(x2);

//////////////////////////////////////////////17. class //////////////////////////////////////////////

// class Rectangle {
//   // constructor จะถูกเรียกทุกครั้งที่มัการสร้าง object
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get color() {
//     return this._color;
//   }
//   set color(c) {
//     this._color = c;
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   // ไม่ต้องมี obj ก็เรียกใช่ได้
//   static areas(obj) {
//     return obj.height * obj.width;
//   }
// }

// // การสืบทอด extend
// class Square extends Rectangle {
//   // inheritance บังคับต้องสร้าง constructor
//   constructor(width) {
//     super(width, width); // super = keyworld ที่ไปเรียก พ่อ Rectangle
//   }
// }

// const r = new Rectangle(100, 200);
// console.log(r.height, r.width);
// r.color = "red"; // มี = คือไปเรียก set
// console.log(r.color); // get
// console.log(r.area);
// console.log(Rectangle.areas(r)); // เรียก static method
// /////////////////////////////////////////////////////
// const s = new Square(100);
// s.color = "blue"; // มี = คือไปเรียก set
// console.log(s.color); // get
// console.log(s.area);

// //////////////////////////////////////////////18. Object //////////////////////////////////////////////
// const doBark = "brak2";
// const dog = {
//   name: "Doggy",
//   age: 2,
//   ["brak" + "2"]: function () {
//     console.log("hong");
//   },
// };

// dog.brak2();

//////////////////////////////////////////////18. Arrow function //////////////////////////////////////////////

// var greet1 = function (firstname, lastname) {
//   return firstname + " " + lastname;
// };
// console.log(greet1("Olan", "Samritjiarapon"));

// var greet2 = (firstname, lastname) => {
//   return firstname + " " + lastname;
// };
// console.log(greet2("Olan", "Samritjiarapon"));

// var greet3 = (firstname, lastname) => firstname + " " + lastname;

// console.log(greet3("Olan", "Samritjiarapon"));

var person1 = {
    name: "Luna",
    handleMessage: function (message, handler) {
      handler(message);
    },
  
    greet: function () {
      var _this = this;
      this.handleMessage("hi", function (message) {
        console.log(message + " " + _this.name);
      });
    },
  };
  
  person1.greet();
  
  var person2 = {
    name: "Luna",
    handleMessage: (message, handler) => {
      handler(message);
    },
  
    greet: function () {
      this.handleMessage("hi", (message) => {
        console.log(message + " " + this.name);
      });
    },
  };
  
  person2.greet();
  
  //////////////////////////////////////////////20. Array Functions //////////////////////////////////////////////
  
  var fruits = ["Apple", "Banana"];
  console.log(fruits.length);
  console.log(fruits[0]);
  
  // Loop
  fruits.forEach(function (item, index, array) {
    console.log(item, index);
  });
  
  // push เพิ่มตัวสุดท้าย
  fruits.push("Orange");
  console.log(fruits); //[ 'Apple', 'Banana', 'Orange' ]
  
  // pop  เอาตัวสุดท้ายออกมา
  var result = fruits.pop();
  console.log(fruits, result);
  
  // Shift  เอาตัวหน้าออก
  fruits.shift();
  console.log(fruits);
  
  // Unshift  เพิ่มข้างหน้า
  fruits.unshift("Strawberry");
  console.log(fruits);
  
  //  INdex หาตำแหน่งใน array
  console.log(fruits.indexOf("Banana"));
  
  //remove
  var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
  console.log(vegetables);
  vegetables.splice(1, 2); // ตำแหน่ง, กี่ตัว
  console.log(vegetables);
  
  // COPY
  var copy = fruits.slice();
  console.log(copy);
  
  //MAP
  var array1 = [1, 4, 9, 16];
  const map1 = array1.map((x) => x * 2);
  console.log(map1);
  
  //////////////////////////////////////////////21. Modules //////////////////////////////////////////////
  