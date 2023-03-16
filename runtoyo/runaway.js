function crazy(){
// const runAwayBtn = footer.children[1].children[3];
// console.dir(runAwayBtn);
// // 도망치다 눌렀을 때
// runAwayBtn.addEventListener('click', function() {
  
  const root=document.getElementById('root');
  root.style.position="relative";
  
  
  function boxStyle(target,w,h,b,flex,borderRadi,textalign,back,posi,flexd){
  target.style.width=w
  target.style.height=h
  target.style.border=b
  target.style.display=flex
  target.style.borderRadius=borderRadi
  target.style.textalign=textalign
  target.style.background=back
  target.style.position=posi
  target.style.flexDirection=flexd
  
  };
  console.log(root);
  function makeDiv(tagName,parent,){
  let make=document.createElement(tagName);
  parent.appendChild(make);
  };
  
  
  boxStyle(root,"66vw","88vh","blue","");
  
  makeDiv("div",root);
    makeDiv("div",root);
    makeDiv("div",root);
  
    boxStyle(root.children[0],"66vw","88vh","","flex","100px","center","");
    boxStyle(root.children[1],"66vw","88vh","","flex","100px","center","","relative");
    boxStyle(root.children[2],"66vw","88vh","","flex","100px","center","","","","row");
  
    for(let i=0; i<=8; i++){
      let teaminfo=document.createElement("div");
      teaminfo.style.alignItems="center";
      teaminfo.style.display="flex";
      teaminfo.style.fontSize="100px";
      teaminfo.style.textAlign="center";
      teaminfo.innerHTML="ㅋㅋㅋㅋㅋㅋㅋㅋ";
      root.children[0].appendChild(teaminfo);
      }
  let a =root;
      a.addEventListener("click", function getRandomColor() {
     
      let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c","#CAC531","blue","wihte","pink","black","aquamarine","gray","#Fc5C7D","#6A82FB","38ef7d","#fffbd5","#b20a2c","yellow"];
  
      for(let i=0;i<=colorlist.length; i++){
        setTimeout(function(){
          root.style.backgroundColor=colorlist[i];
          
        }, 100*i);
       }     
        });





// })
}

// // 내 포켓몬이 뒤로 빠지며 사라지는 효과 함수
// function runPoke(name, time, delay) {
//   name.animate([
//   {opacity: 1, transform: "translate(0, 0)"},
//   {opacity: 0, transform: "translate(-50%, 30%)"},
// ], {
//   duration: time,
//   delay: delay,
//   // 뒤로 빠진 뒤에 애니메이션이 초기화 되지 않도록 설정
//   fill: "forwards",
// });
// }