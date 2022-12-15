const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8800;

const app = http.createServer((req, res) => {
  
  const index = fs.readFileSync('../public/index.html', 'utf8');
  const css = fs.readFileSync('../output/output.css', 'utf8');
  
  console.log(req.url);

  if(req.method === 'GET') {
    if(req.url === '/') {
      res.writeHead(200, {'Content-Type':'text/html; charset= utf-8'});
      res.end(index)
    }
    else if (req.url === '/output/output.css') {
      res.writeHead(200, {'Content-Type':'text/css; charset= utf-8'});
      res.end(css)
    }
  };
  // const index = () => {
  //   fs.readFile('../public/index.html', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     res.end(data, 'utf-8');
  //     console.log('루트');
  //   });
  //   res.writeHead(200, {'Content-Type':'text/html; charset= utf-8'});
  // };
  
  // const css = () => {
  //   fs.readFile('../output/output.css', {encoding: 'utf8'}, (err, data) => {
  //     if (err) throw err;
  //     res.end(data);
  //     console.log('outputCss');
  //   });
  //   res.writeHead(200, {'Content-Type':'text/css'});
  // };

  // const pageError = () => {
  //   res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
  //   res.end('주소가 없습니다.');
  //   console.log('Not found');
  // };
  
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`${port} 로 가동 된 서버 입니다.`);
});
