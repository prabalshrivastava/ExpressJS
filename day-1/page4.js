//arrray
//collection of similar or dissimilar values

const countries = ["india","usa","uk"]
console.log(countries);
for (let index = 0; index < countries.length; index++) {
    console.log(`value at ${index} = ${countries[index]}`);
}


const numbers = [10,20,30,40,50]
console.log(numbers);
numbers.push(60);
console.log(numbers);
numbers.pop()
console.log(numbers);
numbers.splice(2,1)
console.log(numbers);


for (let index = 0; index < numbers.length; index++) {
    console.log(`value at ${index} = ${numbers[index]}`);
}


 
