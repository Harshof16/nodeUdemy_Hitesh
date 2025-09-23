const http = require("node:http");
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync('log.txt', log, 'utf-8')

  switch (method) {
    case "GET": {
      switch (path) {
        case "/":
          return res.writeHead(200).end("Hello from the server!");
        case "/contact-us":
          return res.writeHead(200, { "Content-type": "application/json" }).end(JSON.stringify({ email: "harsh@gmail.com", name: "Harsh" }));
        case "/tweet":
          return res.writeHead(200).end("Here's all the tweets");
      }
    }
    break
    case "POST": {
        switch(path) {
            case "/tweet":
                return res.writeHead(201).end('Your tweet was created.')

        }
    }
  }
  
  return res.writeHead(404).end("You're lost man!")
});

server.listen(8000, () => console.log("Server listening on port 8000"));
