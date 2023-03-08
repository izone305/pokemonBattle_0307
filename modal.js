//----기본 셋팅--------------------------------------------------
const btm = document.getElementById('modalWrap');
const pokeSkill = ["몸통 박치기", "할퀴기", "하품"];
const skillNum = 3; //스킬 개수 정하기
//---------------------------------------------------------------

//함수 설정------------------------------------------------------------------------

//앨리먼트 생성 함수
function createEle(elementVal, nameVal, value, textVal, parent){
  const ele = document.createElement(elementVal);
  if(nameVal !== ""){
    ele.setAttribute(nameVal, value);
  }
  ele.textContent = textVal;
  parent.appendChild(ele);
};
//스타일 변경 함수
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
//플렉스 속성 함수
function flexProperty(target, direcVal, justiVal, alignVal){
  target.style.flexDirection = direcVal;
  target.style.justifyContent = justiVal;
  target.style.alignItems = alignVal;
}
//포지션 설정 함수
function positionMaker(target, positionVal, top, left, bottom, right){
  target.style.position = positionVal;
  target.style.top = top;
  target.style.left = left;
  target.style.bottom = bottom;
  target.style.right = right;
}
//---------------------------------------------------------------------------------------

//-------모달창 스타일 하는 부분--------------------------------------------------------
createEle("ul", "id", "modalLi", "", btm);
const ul = document.getElementById('modalLi');

styleMaker(ul, "200px", "100px", "flex", "", "5px double black", "10pt", "", "", "0 0 0 15px");
flexProperty(ul, "column", "center", "");
ul.style.listStyleType = "none";
ul.style.backgroundColor = "white";
ul.style.scale = "1.5";

for(let i = 0; i < skillNum; i++){
  createEle("li", "", "", "", ul);
  styleMaker(ul.children[i], "100%", "30%", "", "", "", "", "12pt", "700", "");
  createEle("span", "", "", pokeSkill[i], ul.children[i]);
  
  //스킬 툴팁 부분 생성
  createEle("span", "", "", "스킬 설명",ul.children[i]);
  styleMaker(ul.children[i].children[1], "", "", "none", "white","1px solid black", "3px", "8pt", "", "");
  //툴팁 위치 조정
  if(i === 0){
    positionMaker(ul.children[i].children[1], "absolute", "-20px", "", "", "");
  }
  else if(i === 1){
    positionMaker(ul.children[i].children[1], "absolute", "10px", "90px", "", "");
  }
  else if(i === 2){
    positionMaker(ul.children[i].children[1], "absolute", "37px", "90px", "", "");
  }
}
//모달창 위치 설정
btm.style.width = "200px"
btm.style.position = "relative";
btm.style.top = "-24vh";
btm.style.left = "5vh";
btm.style.backgroundColor = "black"
btm.style.display = "none"

//---------------------------------------------------------------------------------------

//------스킬 함수 불러오는 영역---------------------------------------------------
function skillFirst(){
  // 첫번째 스킬 함수 실행
  movePoke(header.children[1], 1000, 150);
  blinkPoke(header.children[2], 200, 250);
  // HP 다 떨어지면 밑으로 내려가면서 사라지는 함수 dropPoke(name, duration, delay);
  if(damage(2,25)){
    dropPoke(header.children[2], 700, 100);
  }
  btm.style.display = "none";
}
function skillSecond(){
  // 두번째 스킬 함수 실행
  movePoke(header.children[1], 1000, 150);
  blinkPoke(header.children[2], 200, 250);
  // HP 다 떨어지면 밑으로 내려가면서 사라지는 함수 dropPoke(name, duration, delay);
  if(damage(2,25)){
    dropPoke(header.children[2], 700, 100);
  }
    btm.style.display = "none";
}
function skillThird(){
  // 세번째 스킬 함수 실행
  movePoke(header.children[1], 1000, 150);
  blinkPoke(header.children[2], 200, 250);

  // HP 다 떨어지면 밑으로 내려가면서 사라지는 함수 dropPoke(name, duration, delay);
  if(damage(2,25)){
    dropPoke(header.children[2], 700, 100);
  }
    btm.style.display = "none";
  }
//------------------------------------------------------------------------------

//click + over 이벤트 발생---------------------------------------------------------------
for(let i = 0; i < ul.children.length; i++){
  ul.children[i].style.cursor = "pointer";
  ul.children[i].addEventListener('mouseover', function(){
    ul.children[i].children[1].style.display = "";
  });
  ul.children[i].addEventListener('mouseout', function(){
    ul.children[i].children[1].style.display = "none";
  });
  //스킬에 따라 다른 함수 호출
  if(i === 0){
    ul.children[i].addEventListener('click', skillFirst);
  }
  else if(i === 1){
    ul.children[i].addEventListener('click', skillSecond);
  }
  else if(i === 2){
    ul.children[i].addEventListener('click', skillThird);
  }
};


