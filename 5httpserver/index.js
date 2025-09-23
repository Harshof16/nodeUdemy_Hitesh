const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(`Incoming request at [${Date.now()}]`);        //sending response is necessary, otherwise server will get stuck forever
    console.log(req.headers);
    console.log(req.method)

    // res.writeHead(200);
    switch(req.url) {
        case '/':
            res.writeHead(200);
            return res.end('Welcome to HomePage');
        case '/contact-us':
            res.writeHead(200);
            return res.end('Contact us page');
        case '/about':
            res.writeHead(200);
            return res.end('About Me');
        default:
            res.writeHead(404);
            return res.end('My name is lolo')
    }
});

server.listen(8000, () => console.log(`Server is up and running on port 8000`))