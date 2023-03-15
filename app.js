const http = require('http');
const fs = require("fs");
const pokemon = require('pokemon')

const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
  //로그인 페이지
  }
  // 무언가
  if(request.method === 'GET' && request.url.startsWith('/pokeImg')){
    fs.readFile(`./node_modules/pokemon-sprites/sprites/pokemon/${pp}.png`, function(err, data){
      response.writeHead(200);
      response.write(data);
      response.end();


    })
      
    console.log("이미지 요청");
  }
  if(request.method === 'GET' && request.url.startsWith('/')) {
    item
  }
  if(request.method === 'GET' && request.url.startsWith('/item')) {
    
  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {

  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {

  }
    

  });
  // 서버 포트 설정
  server.listen(305, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });