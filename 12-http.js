const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('About page page');
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seen to find the page you are looking for</p>
    <a href="/">Back home</a>
  `);
  }
});

server.listen(5001);
