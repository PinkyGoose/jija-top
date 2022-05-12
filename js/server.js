
const http =require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    console.log('Hello!'+request.method+request.url);
    if(request.url == '/css/style.css'){
        const css = fs.readFileSync('css/style.css','utf8');
        response.end(css);
    }
    else {
        const text = fs.readFileSync('html/index.html', 'utf8');
        response.end(text);
    }
});


server.listen(process.env.PORT||3000);
console.log('Server started!');