// 절차 생각해보기
// 1. 회원가입 버튼 클릭
// 2. id / pw 입력
// 3. 로그인 창으로 이동

const fs = require('fs');

// 아래의 아이디와 비밀번호를 입력받았다고 가정
let userID = "KDT";
let userPW = "305";

let num = 0;

// 객체에 데이터 추가
const loginData = {};
loginData['user'+ num +'id'] = userID;
loginData['user'+ num +'pw'] = userPW;

// 추가 된 데이터 확인 o
console.log(loginData);

// 추가 된 데이터를 JSON 형식으로 저장
const userLogin = JSON.stringify(loginData);

// loginData.JSON 파일에 덮어쓰기
fs.writeFile('./loginData.JSON', userLogin, (err) => {
  fs.readFile('./loginData.JSON', 'utf-8', (err, data) =>{
    console.log(data);
  })
})

//입력 받고 추가하는 과정을 잘 설계하면 가능할 듯

