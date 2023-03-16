module.exports = {
  formTag: `
  <form method="GET" action="http://localhost:305/battle">
    <label for="id">ID : </label>
    <input type="text" id="id" name="id">
    <br>
    <label for="password">PW: </label>
    <input type="text" id="password" name="password">
    <br>
    <input type="submit" value="로그인">
  </form>
  <p>ID : KDT / PW : 305</p>
  `,
  body: function bodyData(data) {
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
  `},
  signUpBtn:`
  <form method="GET" action="/signUp">
    <input type="submit" value="회원가입">
  </form>
  `,
  signUpForm: `
  <form method="GET" action="http://localhost:305/">
    <label for="id">ID : </label>
    <input type="text" id="id" name="id">
    <br>
    <label for="password">PW: </label>
    <input type="text" id="password" name="password">
    <br>
    <input type="submit" value="가입하기">
  </form>
  `,
};