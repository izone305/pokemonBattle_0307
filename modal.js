
const btm = document.getElementById('modalWrap');
const pokeSkill = ["몸통 박치기", "할퀴기", "하품"];

function createEle(elementVal, nameVal, value, textVal, parent){
  const ele = document.createElement(elementVal);
  if(nameVal !== ""){
    ele.setAttribute(nameVal, value);
  }
  ele.textContent = textVal;
  parent.appendChild(ele);
};
function styleMaker(target, widthVal, heightVal, displayVal, bgColorVal, borderVal, borderRdisVal, ftSizeVal, ftWeightVal, paddingVal){
  target.style.width = widthVal;
  target.style.height = heightVal;
  target.style.display = displayVal;
  target.style.backgroundColor = bgColorVal;
  target.style.border = borderVal;
  target.style.borderRadius = borderRdisVal;
  target.style.fontSize = ftSizeVal;
  target.style.fontWeight = ftWeightVal;
  target.style.padding = paddingVal;
}
function flexProperty(target, direcVal, justiVal, alignVal){
  target.style.flexDirection = direcVal;
  target.style.justifyContent = justiVal;
  target.style.alignItems = alignVal;
}

createEle("ul", "id", "modalLi", "", btm);
const ul = document.getElementById('modalLi');

styleMaker(ul, "200px", "100px", "flex", "", "5px ridge silver", "10pt", "", "", "0 0 0 15px");
flexProperty(ul, "column", "center", "");
ul.style.listStyleType = "none";
ul.style.backgroundColor = "white";
ul.style.scale = "1.5";

for(let i = 0; i < 3; i++){
  createEle("li", "", "", pokeSkill[i], ul);
  styleMaker(ul.children[i], "100%", "30%", "", "", "", "", "12pt", "700", "");

}
btm.style.width = "200px"
btm.style.position = "relative";
btm.style.top = "-24vh";
btm.style.left = "5vh";
btm.style.backgroundColor = "black"
btm.style.display = "none"
function moveFunc(){
  // 실행
  movePoke(header.children[1], 1000, 150);
  blinkPoke(header.children[2], 200, 250);
  if(damage(2,25)){
    dropPoke(header.children[2], 700, 100);
  }
}
ul.children[0].addEventListener('click', moveFunc);

