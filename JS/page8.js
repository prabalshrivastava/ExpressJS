function myFunction(p1) {
    console.log(`p1 = ${p1},type of p1 = ${typeof(p1)}`)
    p1();
}

function function1() {
    console.log(`inside function1`);
}

// myFunction(100);
// myFunction(`test`);
// myFunction(function1);

function executor(func) {
    console.log(`inside executor`);
    func(10,20)
}

function add(p1,p2) {
    console.log(`addition = ${p1+p2}`);
}

const subtract = function(p1,p2) {
    console.log(`subtract = ${p1-p2}`);
}


const divide = (p1,p2) => {
    console.log(`divide = ${p1/p2}`);
}

executor(add);
executor(subtract);
executor(divide);
executor(
    (p1,p2) =>console.log(`mutliplication = ${p1*p2}`)
);

function executor2(p1,p2,func) {
    console.log(`inside executor2`);
    func(p1,p2)
}

//callback function - you write that function but is called by someone else.
//every entry point function is a callback function.
executor2(30,40,(p1,p2) => {
        console.log(`addition = ${p1 + p2}`);
    }
)
