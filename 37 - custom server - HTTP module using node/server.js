const http = require("http");

const port = process.env.PORT || 5000;

const server = http.createServer((req, res)=>{
    //console.log(req);  // req to get the rquests done by user
    console.log(req.url);   // for example req.url to get url requested by user
    res.statusCode = 200;
    res.setHeader("content-type","text/html");   // for delivering the html content. 
    res.end("<h1>Custome server </h1> <p>This is the custome http server...</p>");
})

server.listen(port, ()=>{
    console.log(`server is listning on ${port}`);
})