const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8800;

const app = http.createServer((req, res) => {

  const index = () => {
    res.writeHead(200, {'Content-Type':'text/html; charset= utf-8'});
    fs.readFile('../public/index.html', 'utf8', (err, data) => {
      if(err) throw err;
      res.end(data, 'utf-8');
      console.log('루트');
    });
  };

  const pageError = () => {
    res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
    res.end('주소가 없습니다.');
    console.log('Not found');
  };

  if(req.method === 'GET') {
    if(req.url === '/') {
      index();
    } else {
      pageError();
    };
  };

});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`${port} 로 가동 된 서버 입니다.`);
});
