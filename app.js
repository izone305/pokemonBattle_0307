const http = require('http');
const fs = require("fs");
// const pokemon = require('pokemon');

const formTag = `
<form method="GET" action="/battle">
  <label for="id">ID: </label>
  <input type="text" id="id" name="id">
  <br>
  <label for="password">PW: </label>
  <input type="text" id="pw" name="pw">
  <br>
  <input type="submit" value="로그인">
</form>
`;
console.log(formTag);

function bodyData(data) {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${data}
</body>
</html>
`
};

// 1. 태그 만들기 o
// 2. 스크립트 확인하기 o
// 3. 잘되는지 확인하기 o
// 4. 페이지 넘어가는지 확인하기 o
//   4-1. url이 넘어가는지 확인 0
// 5. url 값을 지정해주기
//  5-1. url을 ? 앞 뒤로 잘라보기
//  5-2. 자른 url을 한번 더 잘라보기


const login = require('./login.js');

const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
  //로그인 페이지
    response.writeHead(200);
    const loginWindow = bodyData(formTag);
    console.log(loginWindow);
    response.write(loginWindow);
    response.end();
  }
  
  if(request.method === 'GET' && request.url.startsWith('/battle')) {
    response.writeHead(200);
    const test = bodyData("test");
    const urltest = request.url.split('?')[0];
    const urltest2 = request.url.split('?')[1];
    const idtest = urltest2.split('=')[1];
    const idtest2 = idtest.split('&')[0];
    const passtest = urltest2.split('=')[2];
    console.log("test지점 " + urltest);
    console.log("test지점2 " + urltest2);
    console.log("idtest " + idtest);
    console.log("idtest2 " + idtest2);
    console.log("passtest " + passtest);
    response.write(test);
    response.end();
  }
  if(request.method === 'GET' && request.url.startsWith('/login')) {

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