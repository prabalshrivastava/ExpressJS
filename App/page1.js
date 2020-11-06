//load the http module
const http = require('http')

//create the server
const server = http.createServer((request,response) => {
    //process the request and send the valid response
    console.log(`request received from client`);
    
    //send the response
    response.end()
});

//listen on port
server.listen(3000,'0.0.0.0',()=>{
    console.log(`server created successfully and started on 3000`);
})