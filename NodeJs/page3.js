function multiply(p1,p2) {
    console.log(`multiplication = ${p1*p2}`);
}
function division(p1,p2) {
    console.log(`division = ${p1/p2}`);
}

const pi = 3.14;

//way 1
// module.exports = multiply;
// module.exports = division;

//way 2
// module.exports = {
//     multiply:multiply,
//     division:division,
//     pi:pi
// }

//way 3
module.exports.multiply = multiply;
module.exports.division = division;
module.exports.pi = pi;