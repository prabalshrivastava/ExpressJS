const os = require('os')
// console.log(os);
console.log(`hostname = ${os.hostname()}`);
console.log(`arch = ${os.arch()}`);
console.log(`os = ${os.os}`);
console.log(`homedir = ${os.homedir()}`);
console.log(`platform = ${os.platform()}`);
console.log(`cpus = ${os.cpus()}`);
console.log(`totalmem = ${os.totalmem()}`);
console.log(`freemem = ${os.freemem()}`);

let cpus = os.cpus();
for (let index = 0; index < cpus.length; index++) {
    const element = cpus[index];
    console.log(`cpu = ${element.model} and speed = ${element.speed}`);
}