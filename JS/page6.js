const function1 = function() {
    console.log(`inside function 1`)
}

function1()

const add = function (p1,p2) {
    const result = p1 + p2
    console.log(`result = ${result}`)
}
add(40,50)

//fat arrow function
const multiply = (p1,p2) => {
    console.log(`multiplication = ${p1 * p2}`)
}
multiply(10,40)