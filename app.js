const http = require('http');
const fs = require("fs");
//const pokemon = require('pokemon')


const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
  //로그인 페이지
  }
  // 무언가
  if(request.method === 'GET' && request.url.startsWith('/pokeImg?nth=')){
    let nth = request.url.split("=")[1]
    fs.readFile(`./graphics/pokemon/${nth}.png`, function(err, data){
      response.writeHead(200);
      response.write(data);
      response.end();
    })
      
    console.log("이미지 요청");
  }
  if(request.method === 'GET' && request.url.startsWith('/battle')) {
    //배틀 화면 서버 창
   if(request.url.split("/").length === 2){
     fs.readFile("./index.html", function(err, data){
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.write(data);
       response.end();
     })
   }else if(request.url.split("/").length === 3){
     
     let name = request.url.split('/')[2];
     console.log(name);
     if(request.method === 'GET' && name === 'commonFunc.js'){
     fs.readFile("./commonFunc.js", function(err, data){  
       response.writeHead(200);
       response.write(data);
       response.end();
     })
     }
     if(request.method === 'GET' && name === 'firstMain.js'){
       fs.readFile("./firstMain.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'energyChecker.js'){
       fs.readFile("./energyChecker.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'backAttack.js'){
       fs.readFile("./backAttack.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'modal.js'){
       fs.readFile("./modal.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'pokeSelect.js'){
       fs.readFile("./pokeSelect.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'footer.js'){
       fs.readFile("./footer.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'skillName.js'){
       fs.readFile("./skillName.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       })
     }
     if(request.method === 'GET' && name === 'runaway.js'){
       fs.readFile("./runaway.js", function(err, data){
         response.writeHead(200);
         response.write(data);
         response.end();
       }
       )
     }
     }
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

  // }
  // if(request.method === 'GET' && request.url.startsWith('/login')) {

  // }
    
  }
  });
  // 서버 포트 설정
  server.listen(305, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });