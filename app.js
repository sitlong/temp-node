const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Hello welcome to my home page');
    }

    if (req.url=== '/about'){
        res.end('this is our short history')
    }

    res.end(
        `<h1>Oops!</h1>
        <p> we can seem to find the page ur looking for</p>
        <a href="/">click here</a>   `
    )
});

server.listen(5000)