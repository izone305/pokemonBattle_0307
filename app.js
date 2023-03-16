const http = require('http');
const fs = require("fs");
//const pokemon = require('pokemon')

// 1. 태그 만들기 o
// 2. 스크립트 확인하기 o
// 3. 잘되는지 확인하기 o
// 4. 페이지 넘어가는지 확인하기 o
//   4-1. url이 넘어가는지 확인 0
// 5. url 값을 지정해주기 o
//  5-1. url을 ? 앞 뒤로 잘라보기 o
//  5-2. 자른 url을 한번 더 잘라보기 o
// 6. url의 뒷부분을 숨길 수는 없나? -> 아직 잘 모르겠음
// 7. 로그인 인증을 해보자 o
//  7-1. id와 pw가 지정된 값일 경우 /battle로 이동 o
//  7-2. 아닐경우 오류 메세지 출력  o
// 8. 태그 만드는 부분 모듈로 따로 빼기 o

// login 모듈, body 작성/form태그 작성
const login = require('./login.js');
let ID;
const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
  //로그인 페이지
    response.writeHead(200);
    const loginWindow = login.body(login.formTag);
    // console.log(loginWindow);
    response.write(loginWindow);
    response.end();
  }
  
  if(request.method === 'GET' && request.url.startsWith('/battle')) {
    // history.replaceState({data: 'replace'}, '', '/battle'); //history.replaceState => url을 다른것으로 덮어씌워주는 녀석? node가 인식 못하는 듯
    response.writeHead(200);
    const urltest2 = request.url.split('?')[1];
    const idtest = urltest2.split('=')[1];
    const idtest2 = idtest.split('&')[0]; //id값
    ID = idtest.split('&')[0];
    const passtest = urltest2.split('=')[2]; //pw값
    console.log("idtest2 " + idtest2);
    console.log("passtest " + passtest);
    if(idtest2 === "KDT" && passtest === "305") { //입력값 비교해서 맞을 경우
      // response.write("success");
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
          })
        }
      }
    } else {  //입력값 비교해서 틀릴 경우
      response.write("failed");
    }
    response.end();
  }
  if(request.method === 'GET' && request.url.startsWith('/item')) {
    if(request.url.split('/').length === 2 ){
      fs.readFile("pokeitem/bag.html", function(err, data){
        response.writeHead(200);
        response.write(data);
        response.end();
      })
    }
    if(request.url.split('/').length === 3 ){}
      if(request.url.split('/')[2] === "bag.js"){
        fs.readFile("pokeitem/bag.js", function(err, data){
          response.writeHead(200);
          response.write(data);
          response.end();
        })
      }
  }
  if(request.method === 'GET' && request.url.startsWith('/select')){
    if(request.url.split('/').length === 2 ){
      fs.readFile("pokeselectPakage/pokeSelectMain.html", function(err, data){
        response.writeHead(200);
        response.write(data);
        response.end();
      })
    }
    if(request.url.split('/').length === 3 ){
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
  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {

  }
    

  });
  // 서버 포트 설정
  server.listen(305, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });