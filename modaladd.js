function divStyle(target, w, h, b) {
  target.style.width = w;
  target.style.height = h;
  target.style.border = b;
}
// 메인 footer
let footer = document.getElementById("footer");
divStyle(footer, "100%", "30%", "1px solid border");
// footer.style.borderRadius
footer.style.position = "relative";
footer.style.backgroundClip = "white";

// 첫 줄 영역
let first = document.createElement("div");
footer.appendChild(first);
divStyle(footer.children[0], "100%", "50%", "1px solid red");
footer.children[0].style.display = "flex";
footer.children[0].style.flexDirection = "row";

// 포인터 1

let tri1 = document.createElement("div");
footer.children[0].appendChild(tri1);
footer.children[0].children[0].style.width = "20%";
footer.children[0].children[0].style.height = "0";

// 첫 줄 영역 왼쪽
let firstLeft = document.createElement("div");
footer.children[0].appendChild(firstLeft);
divStyle(footer.children[0].children[1], "30%", "100%", "1px solid red");
footer.children[0].children[1].innerHTML = "<h1>싸우다</h1>";
footer.children[0].children[1].style.cursor = "pointer";
footer.children[0].children[1].style.textAlign = "center";

// 포인터 2
let tri2 = document.createElement("div");
footer.children[0].appendChild(tri2);
footer.children[0].children[2].style.width = "20%";
footer.children[0].children[2].style.height = "0";

// 첫 줄 영역 오른쪽
let firstRight = document.createElement("div");
footer.children[0].appendChild(firstRight);
divStyle(footer.children[0].children[3], "30%", "100%", "1px solid red");
footer.children[0].children[3].innerHTML = "<h1>가방</h1>";
footer.children[0].children[3].style.textAlign = "center";


// 둘째 줄 영역
let second = document.createElement("div");
footer.appendChild(second);
divStyle(footer.children[1], "100%", "50%", "1px solid red");
footer.children[1].style.display = "flex";
footer.children[1].style.flexDirection = "row";

let tri3 = document.createElement("div");
footer.children[1].appendChild(tri3);
footer.children[1].children[0].style.width = "20%";
footer.children[1].children[0].style.height = "0";

// 둘째 줄 영역 왼쪽
let secondLeft = document.createElement("div");
footer.children[1].appendChild(secondLeft);
divStyle(footer.children[1].children[1], "30%", "100%", "1px solid red");
footer.children[1].children[1].innerHTML = "<h1>포켓몬</h1>";
footer.children[1].children[1].style.textAlign = "center";

let tri4 = document.createElement("div");
footer.children[1].appendChild(tri4);
footer.children[1].children[2].style.width = "20%";
footer.children[1].children[2].style.height = "0";

// 둘째 줄 영역 오른쪽
let secondRight = document.createElement("div");
footer.children[1].appendChild(secondRight);
divStyle(footer.children[1].children[3], "30%", "100%", "1px solid red");
footer.children[1].children[3].innerHTML = "<h1>도망치다</h1>";
footer.children[1].children[3].style.textAlign = "center";

footer.children[0].children[0].style.border = "white";
footer.children[0].children[2].style.border = "white";
footer.children[1].children[0].style.border = "white";
footer.children[1].children[2].style.border = "white";

// 싸우다 mouseover
footer.children[0].children[1].addEventListener('mouseover', function () {
  footer.children[0].children[0].style.borderBottom = "12px solid transparent";
  footer.children[0].children[0].style.borderTop = "12px solid transparent";

  footer.children[0].children[0].style.borderLeft = "30px solid black";

  footer.children[0].children[0].style.borderRight = "15px solid transparent";
  footer.children[0].children[0].style.alignSelf = "center";
  footer.children[0].children[2].style.border = "white";
  footer.children[1].children[0].style.border = "white";
  footer.children[1].children[2].style.border = "white";
});

// 가방 mouseover
footer.children[0].children[3].addEventListener('mouseover', function () {
  footer.children[0].children[0].style.border = "white";
  footer.children[0].children[2].style.borderBottom = "12px solid transparent";
  footer.children[0].children[2].style.borderTop = "12px solid transparent";

  footer.children[0].children[2].style.borderLeft = "30px solid black";

  footer.children[0].children[2].style.borderRight = "15px solid transparent";
  footer.children[0].children[2].style.alignSelf = "center";
  footer.children[1].children[0].style.border = "white";
  footer.children[1].children[2].style.border = "white";
});

// 포켓몬 mouseover
footer.children[1].children[1].addEventListener('mouseover', function () {
  footer.children[0].children[0].style.border = "white";
  footer.children[0].children[2].style.border = "white";
  footer.children[1].children[0].style.borderBottom = "12px solid transparent";
  footer.children[1].children[0].style.borderTop = "12px solid transparent";

  footer.children[1].children[0].style.borderLeft = "30px solid black";

  footer.children[1].children[0].style.borderRight = "15px solid transparent";
  footer.children[1].children[0].style.alignSelf = "center";
  footer.children[1].children[2].style.border = "white";
});

// 도망치다 mouseover
footer.children[1].children[3].addEventListener('mouseover', function () {
  footer.children[0].children[0].style.border = "white";
  footer.children[0].children[2].style.border = "white";
  footer.children[1].children[0].style.border = "white";
  footer.children[1].children[2].style.borderBottom = "12px solid transparent";
  footer.children[1].children[2].style.borderTop = "12px solid transparent";

  footer.children[1].children[2].style.borderLeft = "30px solid black";

  footer.children[1].children[2].style.borderRight = "15px solid transparent";
  footer.children[1].children[2].style.alignSelf = "center";
});

// 모달창 띄우기


// 경계



const btm = document.getElementById('footer');
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

for(let i = 0; i < 3; i++){
  createEle("li", "", "", pokeSkill[i], ul);
  styleMaker(ul.children[i], "100%", "30%", "", "", "", "", "12pt", "700", "");

}
ul.style.position = "absolute";
ul.style.top = "50px";
ul.style.left = "70px";
ul.style.backgroundColor = "white";
ul.style.scale = "1.7";
ul.style.display = "none";

footer.children[0].children[1].addEventListener('click', function() {
  console.log("click");
  ul.style.display = "block";
  
  // ul.style.display = "display";
});

function hplose(hp){ 
  hp.style.width="50%"; 
  hp.style.background="red"; }

function moveFunc(){
  // 실행
  movePoke(header.children[1], 1000, 150);
  hplose(header.children[0].children[1].children[0].children[0].children[1])
}
ul.children[0].addEventListener('click', moveFunc);

