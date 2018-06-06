// ARRAY FUNCTION
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);
console.log(fruits[0]);

// LOOP
fruits.forEach(function(item, index, array) {
    console.log(item, index);
})

// PUSH 
fruits.push('Orange');
console.log(fruits);

// POP 
var result = fruits.pop();
console.log(fruits, result);

// SHIFT
fruits.shift();
console.log(fruits);

// UNSHIFT
fruits.unshift('Strawberry')
console.log(fruits);

// INDEX
console.log(fruits.indexOf('Banana'));

// REMOVE
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
vegetables.splice(1, 2);
console.log(vegetables);

// COPY
var copy = fruits.slice();
console.log(copy);

// MAP 
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(array1);
console.log(map1);