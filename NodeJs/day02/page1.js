const fs = require('fs')


function functionSync() {
    const filename = './1.txt'

    //read the file
    console.log(`read started`);

    //sync -> sequential call
    //blocking API/function
    const data = fs.readFileSync(filename)
    console.log(`read completed`);
    console.log('' + data);
    const answer = 10+20;
    console.log(answer);
}

functionSync();
console.log("\n\n");

function functionAsync() {
    const filename = './1.txt'

    //read the file
    console.log(`read started`);

    //sync -> Parallel call
    //non-blocking api
    const data = fs.readFile(filename,(error,data) => {
        console.log(`read completed`);
        console.log('' + data);
    })
    const answer = 10+20;
    console.log(answer);
}

functionAsync();
