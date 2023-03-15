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
  if(request.method === 'GET' && request.url.startsWith('/login')) {

  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {

  }
  if(request.method === 'GET' && request.url.startsWith('/select')){
    if(request.url.split('/').length === 2 ){
      fs.readFile("pokeselectPakage/pokeSelectMain.html", function(err, data){
        response.writeHead(200);
        response.write(data);
        response.end();
      })
    }
    if(request.url.split('/').length === 3 ){}
      if(request.url.split('/')[2] === "commonFunc.js"){
        fs.readFile("pokeselectPakage/commonFunc.js", function(err, data){
          response.writeHead(200);
          response.write(data);
          response.end();
        })
      }
      else if(request.url.split('/')[2] === "firstMain.js"){
        fs.readFile("pokeselectPakage/firstMain.js", function(err, data){
          response.writeHead(200);
          response.write(data);
          response.end();
        })
      }else if(request.url.split('/')[2] === "energyChecker.js"){
        fs.readFile("pokeselectPakage/energyChecker.js", function(err, data){
          response.writeHead(200);
          response.write(data);
          response.end();
        })
      }else if(request.url.split('/')[2] === "pokeSelect.js"){
        fs.readFile("pokeselectPakage/pokeSelect.js", function(err, data){
          response.writeHead(200);
          response.write(data);
          response.end();
        })
      }
  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {
    response.write()
  }
    

  });
  // 서버 포트 설정
  server.listen(305, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });