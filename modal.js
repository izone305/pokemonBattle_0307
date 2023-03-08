//----기본 셋팅--------------------------------------------------
const btm = document.getElementById('modalWrap');
const pokeSkill = ["몸통 박치기", "할퀴기", "하품"];
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
//---------------------------------------------------------------------------------------

//-------모달창 스타일 하는 부분--------------------------------------------------------
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
//---------------------------------------------------------------------------------------

//클릭 이벤트 발생---------------------------------------------------------------
function moveFunc(num){
  // 실행
  //스킬에 따라 다른 함수 호출
  if(num === 0){
    movePoke(header.children[1], 1000, 150);
    hplose(header.children[0].children[1].children[0].children[0].children[1]);
    btm.style.display = "none";
  }
  else if(num === 1){
    movePoke(header.children[1], 1000, 150);
    hplose(header.children[0].children[1].children[0].children[0].children[1]);
    btm.style.display = "none";
  }
  else if(num === 2){
    movePoke(header.children[1], 1000, 150);
    hplose(header.children[0].children[1].children[0].children[0].children[1]);
    btm.style.display = "none";
  }

}

for(let i = 0; i < ul.children.length; i++){
  ul.children[i].style.cursor = "pointer";
  ul.children[i].addEventListener('click', moveFunc(i));
};

