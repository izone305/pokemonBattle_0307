const fs = require('fs');

// fs module로 파일을 읽어 올 수 있는가 o
// fs module로 파일 데이터를 덮어쓸 수 있는가 o


const userLogin = {
  id: "KDT305",
  pw: "305KDT",
};

userLogin['id2'] = "KDT";
userLogin['pw2'] = "305";

console.log(userLogin);

const loginData = JSON.stringify(userLogin);
console.log(loginData);

// const parseLoginData = JSON.parse(loginData);
// console.log(parseLoginData.id);

// fs.readFile('loginData', 'utf8', (err, data) => {
//   console.log("read " + data);
// })

// fs.writeFile('./test.JSON', "", (err) => {
//   fs.readFile('./test.JSON', 'utf8', (err, data) => {
//     console.log(data);
//   })
// });


fs.readFile('./test.JSON', 'utf8', (err, data) => {
  console.log(data);
  const userData = JSON.parse(data);
  console.log("id " + userData.id);
})


fs.writeFile('./test.JSON', loginData, (err) => {
  fs.readFile('./test.JSON', 'utf8', (err, data) => {
    console.log(data);
    const userData = JSON.parse(data);
    console.log("id " + userData.id);
  })
})

// const readfile = fs.readFileSync('./test.JSON')
// console.log("test" + readfile);
// console.log(readfile.id);
// fs.readFile('./test.JSON', 'utf8', (err, data) => {
//   console.log(data);
//   let login = data;
//   let user_id = login.id;
//   console.log(user_id);
// });