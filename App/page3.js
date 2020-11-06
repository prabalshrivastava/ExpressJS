const http = require('http')


const server = http.createServer((request,response) => {
    if (request.url == '/person') {
        //select the query
        switch (request.method) {
            case 'GET':
                console.log(`select * from person`);
                break;
            case 'POST':
                console.log(`insert into person`);
                break;
            case 'PUT':
                console.log(`update person`);
                break;
            case 'DELETE':
                console.log(`delete from person`);
                break;
            default:
                break;
        }
    }else if (request.url == '/category') {
                //select the query
                switch (request.method) {
                    case 'GET':
                        console.log(`select * from category`);
                        break;
                    case 'POST':
                        console.log(`insert into category`);
                        break;
                    case 'PUT':
                        console.log(`update category`);
                        break;
                    case 'DELETE':
                        console.log(`delete from category`);
                        break;
                    default:
                        break;
                }
                
    }
    response.end();
});

server.listen(4000,'0.0.0.0',()=>{
    console.log(`server started on port 4000`);
})