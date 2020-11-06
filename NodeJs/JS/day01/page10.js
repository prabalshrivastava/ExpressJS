//Object 
// - is the root function provided by javascript itself.
// - in built function 
// - also known as constructor function or root constructor function to create an object

//object

const person1 = new Object();
person1['first name'] = 'person1';
person1.address = 'pune';
person1.age = 40;
person1.canVote = true;


console.log(`type of person1 = ${typeof(person1)}`);
console.log(person1);
console.log(`person1 = ${person1}`);

const mobile = new Object();
mobile.model = 'iphone'
mobile.company = 'apple'
mobile.price = 144000
console.log(mobile);


const car = new Object();
car['model'] = '120'
car['company'] = ''
