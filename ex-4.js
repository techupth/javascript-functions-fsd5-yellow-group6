// Start coding here
let calculator = {};

let add = (a,b) => { return a+b }
let subtract = (a,b) => { return a-b }
let multiply = (a,b) => { return a*b }
let divide = (a,b) => { return a/b }

calculator = {
  add : add,
  subtract : subtract,
  multiply : multiply,
  divide : divide
}

let addResult = calculator.add
console.log(addResult(10,20))

let divideResult = calculator.divide
console.log(divideResult(3000,10))

