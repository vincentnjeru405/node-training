const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back home </a>`);   
});

server.listen(8070, () => {
    console.log('Server is running on port 8070');
});