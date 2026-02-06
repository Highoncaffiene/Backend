//using HTTP module(inbuilt given by node) we can setup a basic server
const http = require ('http');
const PORT = 3000;

// Http module contains a funtioncalled as createServer, this createServer function takes callback as the input
// the createServer function returns us the server object
// now, inside the call back, we get two arguments
// -request-> this argument contains all the details about the incoming request.
// -response->  the argument contains the function, using which we can prepare the responses

const server = http.createServer(function exec(request, response){
    console.log(request);
    if(request.url=='/home'){
        response.end('Welcome home')
    } else if(request.url=='/contact'){
        response.end("List of contacts")
    }
    else{
        response.end('hello world')

    }

});
server.listen(PORT, function process(){
    //once the server has started, then this callback will be executed
    console.log(`Server running on port ${PORT}`)

});

