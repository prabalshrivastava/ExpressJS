const http = require('http')
const server = http.createServer((request,response)=>{
    console.log(`request received`);
    console.log(`method : ${request.method}\npath : ${request.url}\n\n`);
    response.end(`hello from server`);
})

server.listen(4000,'0.0.0.0', () => {
    console.log(`server started on the port 4000`);
})