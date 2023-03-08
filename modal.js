
const btm = document.getElementById('modalWrap');
// const pokeSkill = ["몸통 박치기", "할퀴기", "하품"];

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
  createEle("li", "", "", pokeSkillArray[i], ul);
  console.log(pokeSkillArray);
  styleMaker(ul.children[i], "100%", "30%", "", "", "", "", "12pt", "700", "");
}
console.dir(ul.children[0]);

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
  hplose(header.children[0].children[1].children[0].children[0].children[1]);

  // HP 다 떨어지면 밑으로 내려가면서 사라지는 함수 dropPoke(name, duration, delay);
  // 테스트를 위해 임시로 여기에서 작동시킴, 나중에 필요한 곳으로 이동시킬 것, 깜빡이는것 때문에 delay를 많이 준 상태
  // HP가 0이 되는 조건에 맞춰서 작동시킬 경우 딜레이 값 조절이 필요해 보임
  dropPoke(header.children[2], 700, 550);
}
ul.children[0].addEventListener('click', moveFunc);