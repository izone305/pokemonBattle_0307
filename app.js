const http = require('http');
const fs = require("fs");
//const pokemon = require('pokemon')

// login 모듈, body 작성/form태그 작성
const login = require('./login.js');
const { hasSubscribers } = require('diagnostics_channel');
let userID;
let userPW;
const userLogin = {};
const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
  //로그인 페이지
    response.writeHead(200);
    const loginWindow = login.body(login.formTag);
    const signUpWindow = login.body(login.signUpBtn);
    response.write(loginWindow);
    response.write(signUpWindow);
    response.end();
  }
  if(request.method === 'GET' && request.url.startsWith('/signUp')) {
    response.writeHead(200);
    const loginWindow = login.body(login.signUpForm);
    response.write(loginWindow);
    response.end();
  }
  
  if(request.method === 'GET' && request.url.startsWith('/battle')) {
    // history.replaceState({data: 'replace'}, '', '/battle'); //history.replaceState => url을 다른것으로 덮어씌워주는 녀석? node가 인식 못하는 듯
    // response.writeHead(200);
    const urltest2 = request.url.split('?')[1];
    const idtest = urltest2.split('=')[1];
    const passtest = urltest2.split('=')[2];
    userID = idtest.split('&')[0];
    userPW = passtest.split('/')[0];

    console.log("초기 객체값 검사");
    console.dir(userLogin);
    console.log("초기 객체값 검사");

    // 객체에 {userID : userPW} 형식으로 데이터를 입력
    userLogin[userID] = userPW;

    console.log("loginData ID :" + Object.keys(userLogin));
    console.log("loginData PW :" + userLogin[userID]);

    const loginData = JSON.stringify(userLogin);

    // loginData.JSON 파일에 입력
    fs.writeFile('./loginData.JSON', loginData, (err) => {
      console.log("success");
    });

    // 파일 데이터 읽어봄 // 확인용
    // fs.readFile('./loginData.JSON',(err, data) => {
    //   const dataJSON = data.toString()
    //   console.log(dataJSON);
    // });

    // 이전 url을 확인 -> error 발생
    // console.log(document.referrer);
    
    console.log(userLogin + "객체")
    console.log(Object.keys(userLogin).includes(userID) + "객체 key 검사 test")
    console.log(userLogin[userID] + "객체 값 검사 test");

    if(Object.keys(userLogin).includes(userID) === true && userLogin[userID] === userPW) { //입력값 비교해서 맞을 경우
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
      response.writeHead(200);
      response.write("failed");
      response.end();
    }
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