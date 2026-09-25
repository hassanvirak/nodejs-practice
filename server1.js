const http = require("http");

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/plain")

    //req.url tells us which page is browser asking for
    if(req.url === "/"){
        res.end("This is the home page!")
    }
    else if(req.url === "/about"){
        res.end("This is about page.")
    }
    else{
        res.statusCode = 404 // 404 means "page not found"
    }
})

server.listen(5000,()=>{
    console.log("Server running at http://localhost:5000");
})