const http = require("http");
const fs = require("fs");
const htmlBox = require("./htmlBox");
//const pokemon = require('pokemon')
const urlCheck = require('./urlChecker');
const pokeRandomCreate = require("./pokeRandomCreate")

// login 모듈, body 작성/form태그 작성
const login = require("./login.js");
// let ID;
const server = http.createServer(function (request, response) {
  let nameURL; //url이름 넣어주는 변수

  if (request.method === "GET" && request.url === "/") {
    //로그인 페이지
    require("./pokeRandomCreate").pokeFirstRandom();
    response.writeHead(200);
    const loginWindow = login.body(login.formTag);
    // console.log(loginWindow);
    response.write(loginWindow);
    response.end();
  }
  if (request.method === "GET" && request.url.startsWith("/Pokelist")) {
    if(request.url.split("/").length === 2){
      fs.readFile(`./nowPokeList.json`, function (err, data) {
      response.writeHead(200);
      response.write(data);
      response.end();
    })
    }else if(request.url.split("/").length === 3){
      let nth = request.url.split("=")[1]
      pokeRandomCreate.pokeSelect(nth);
      response.writeHead(200);
      response.end();
      console.log(nth + " 포켓몬 수정");
    }
  }
  if (request.method === "GET" && request.url.startsWith("/pokeImg?nth=")) {
    //포켓몬 이미지 앞모습 가져오는 곳
    let nth = request.url.split("=")[1];
    fs.readFile(`./graphics/pokemon/${nth}.png`, function (err, data) {
      response.writeHead(200);
      response.write(data);
      response.end();
    });
  }
  if (request.method === "GET" && request.url.startsWith("/pokeImg/back?nth=")) {
    //포켓몬 이미지 뒷모습 가져오는 곳
    let nth = request.url.split("=")[1];
    fs.readFile(`./graphics/pokemonBack/${nth}.png`, function (err, data) {
      response.writeHead(200);
      response.write(data);
      response.end();
    });
  }
  
  if (request.method === "GET" && request.url.startsWith("/battle")) {
    // history.replaceState({data: 'replace'}, '', '/battle'); //history.replaceState => url을 다른것으로 덮어씌워주는 녀석? node가 인식 못하는 듯
    // response.writeHead(200);
    const urltest2 = request.url.split("?")[1];
    const idtest = urltest2.split("=")[1];
    const idtest2 = idtest.split("&")[0]; //id값
    // ID = idtest.split('&')[0];
    const passtest = urltest2.split("=")[2];
    const passtest2 = passtest.split("/")[0]; //pw값
    console.log("idtest2 " + idtest2);
    console.log("passtest " + passtest2);
    if (idtest2 === "KDT" && passtest2 === "305") {
      //입력값 비교해서 맞을 경우
      // response.write("success");
      console.log(request.url.split("/").length);
//===================================================================================

    //배틀 화면 서버 창
      if(request.url.split("/").length === 2){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(htmlBox.htmlBoxFunc(htmlBox.battleBody));
        response.end();
      }
      else if(request.url.split("/").length === 3){
          nameURL = urlCheck(request.url.split('/')[2]);
          fs.readFile(nameURL, function(err, data){
            response.writeHead(200);
            response.write(data);
            response.end();
          });
      }
      else {  //입력값 비교해서 틀릴 경우
        response.write("failed");
      }
    } 
    // response.end();
  }
  if (request.method === "GET" && request.url.startsWith("/item")) {
    if (request.url.split("/").length === 2) {
      response.writeHead(200);
      response.end(htmlBox.htmlBoxFunc(htmlBox.bagBody));
    }
    if (request.url.split("/").length === 3) {
      nameURL = urlCheck(request.url.split('/')[2]);
        fs.readFile(nameURL, function (err, data) {
          response.writeHead(200);
          response.write(data);
          response.end();
        });
    }
  }
  if (request.method === "GET" && request.url.startsWith("/select")) {
    if (request.url.split("/").length === 2) {
      response.writeHead(200);
      response.end(
        htmlBox.htmlBoxFunc(htmlBox.selectBody)
      );
    }
    if (request.url.split("/").length === 3) {
      nameURL = urlCheck(request.url.split('/')[2]);
        fs.readFile(nameURL, function (err, data) {
          response.writeHead(200);
          response.write(data);
          response.end();
        });
    }
  }
  if (request.method === "GET" && request.url.startsWith("/login")) {
  }
});
// 서버 포트 설정
server.listen(305, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});
