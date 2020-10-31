 //every single file is considered as module
//module -> collection of function variables,constants etc

// console.log(module);

function add(p1,p2) {
    const result =  p1 + p2;
    console.log(`addition = ${p1 + p2}`);
}
//export the function
module.exports = add;
// add(10,20);