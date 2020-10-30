//function alias
// -second name given to an existing function
let num1 = 100
let num2 = num1
console.log(`num 1 = ${num1}`);
console.log(`num 2 = ${num2}`);


num1 = 500
console.log(`num 1 = ${num1}`);
console.log(`num 2 = ${num2}`);

function function1() {
    console.log(`inside function1`);
}

function1()

// const myfunction = 100;
//function alias
const myfunction = function1;

myfunction()