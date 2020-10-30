function function1(){
    console.log(this);
}
// function1();
function addParams(p1,p2) {
    const result = p1+p2;
    console.log(`result = ${result}`);
}
function add() {
    console.log(arguments);
    let answer = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        answer += element;
    }
    console.log(answer);
}
add(10,20);
add(10,20,30);
add(10,20,30,40);
 
