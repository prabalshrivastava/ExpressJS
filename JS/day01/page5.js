// function
// - named function
//  - named block of code
// - anpnymous function
//  - unnamed block of code

// parameterleas function
function function1(params) {
    console.log(`inside function1`) 
}

function1()
console.log(`function1 = ${function1},type of function1 = ${typeof(function1)}`)

let num = 100
console.log(`num = ${num},type of num = ${typeof(num)}`) 

//variables are automatically inferred in JS hence we need not declare the variables data type
function function2(p1){
    console.log(`inside function1`)
    console.log(`p1 = ${p1},type of p1 = ${typeof(p1)}`)
}
function2(10)
function2(true)
function2(`string`)
function2()