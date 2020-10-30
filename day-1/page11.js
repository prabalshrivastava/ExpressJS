//object
// - by using constructor function
function Person(name,address,age,canVote){
    this.name = name;
    this.address = address;
    this.age = age;
    this.canVote = canVote;
}

const p1 = new Person('person1','pune',40,true)
const p2 = new Person('person2','mumbai',10,false)
console.log(p1);
console.log(p2);
