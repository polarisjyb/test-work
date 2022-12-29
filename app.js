const http = require('http');
const fs = require('fs');
const port = process.env.PORT||5678;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log(`${port}로 가동된 서버`);
});