
const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/")
        res.end('Hello there'); //sending response
    else if (req.url == "/about")
        res.end("About us");
    else {
        res.writeHead(404, { "Content-type": "text" }); //to give client error
        res.end("<h1>404 error</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to port no 8000')
});