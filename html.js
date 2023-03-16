
module.exports = {
  battleList: `
        <div id="root">
          <div id="header"></div>
          <div id="footer"></div>
          <div id="modalWrap"></div>
        </div>
        <script src="/battle/commonFunc.js"></script>
        <script src="/battle/firstMain.js"></script>
        <script src="/battle/energyChecker.js"></script> 
        <script src="/battle/backAttack.js"></script> 
        <script src="/battle/modal.js"></script> 
        <script src="/battle/footer.js"></script> 
        <script src="/battle/skillName.js"></script> 
        <script src="/battle/runaway.js"></script>
      `,
  htmlStd: function(script){
  return`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
      *{margin: 0px; padding: 0px; box-sizing: border-box;
        /* border: 1px dotted red; */
        font-family:'Sunflower', sans-serif;}

    </style>
  </head>
  <body>
    ${script}
  </body>
    
  </html>`
}
}
