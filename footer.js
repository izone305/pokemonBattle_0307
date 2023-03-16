function divStyle(target, w, h, b) {
  target.style.width = w;
  target.style.height = h;
  target.style.border = b;
}
// 메인 footer
let footer = document.getElementById("footer");
divStyle(footer, "100%", "30%", "6px double black");
footer.style.borderRadius = "20px";

// 첫 줄 영역
let first = document.createElement("div");
footer.appendChild(first);
divStyle(footer.children[0], "100%", "50%", "");
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
divStyle(footer.children[0].children[1], "30%", "100%", "");
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
divStyle(footer.children[0].children[3], "30%", "100%", "");
footer.children[0].children[3].innerHTML = "<h1>가방</h1>";
footer.children[0].children[3].style.textAlign = "center";


// 둘째 줄 영역
let second = document.createElement("div");
footer.appendChild(second);
divStyle(footer.children[1], "100%", "50%", "");
footer.children[1].style.display = "flex";
footer.children[1].style.flexDirection = "row";

let tri3 = document.createElement("div");
footer.children[1].appendChild(tri3);
footer.children[1].children[0].style.width = "20%";
footer.children[1].children[0].style.height = "0";

// 둘째 줄 영역 왼쪽
let secondLeft = document.createElement("div");
footer.children[1].appendChild(secondLeft);
divStyle(footer.children[1].children[1], "30%", "100%", "");
footer.children[1].children[1].innerHTML = "<h1>포켓몬</h1>";
footer.children[1].children[1].style.textAlign = "center";

let tri4 = document.createElement("div");
footer.children[1].appendChild(tri4);
footer.children[1].children[2].style.width = "20%";
footer.children[1].children[2].style.height = "0";

// 둘째 줄 영역 오른쪽
let secondRight = document.createElement("div");
footer.children[1].appendChild(secondRight);
divStyle(footer.children[1].children[3], "30%", "100%", "");
footer.children[1].children[3].innerHTML = "<h1>도망치다</h1>";
footer.children[1].children[3].style.textAlign = "center";


for (let i = 0; i < 2; i++) {
  footer.children[0].children[1].addEventListener('mouseover', function () {

  })
}

// 방향키
let modalWarp = footer.nextSibling.nextSibling
let arr = [0, 0];



//화살표 초기설정
changeFunc()
// footer.children[0].children[0].style.borderBottom = "12px solid transparent";
// footer.children[0].children[0].style.borderTop = "12px solid transparent";

// footer.children[0].children[0].style.borderLeft = "30px solid black";

// footer.children[0].children[0].style.borderRight = "15px solid transparent";
// footer.children[0].children[0].style.alignSelf = "center";

// 싸우다 mouseover
footer.children[0].children[1].addEventListener('mouseover', function () {
  arr = [0, 0];
  clearFunc();
  changeFunc();
  // footer.children[0].children[0].style.borderBottom = "12px solid transparent";
  // footer.children[0].children[0].style.borderTop = "12px solid transparent";

  // footer.children[0].children[0].style.borderLeft = "30px solid black";

  // footer.children[0].children[0].style.borderRight = "15px solid transparent";
  // footer.children[0].children[0].style.alignSelf = "center";
  // footer.children[0].children[2].style.border = "white";
  // footer.children[1].children[0].style.border = "white";
  // footer.children[1].children[2].style.border = "white";
});

// 가방 mouseover
footer.children[0].children[3].addEventListener('mouseover', function () {
  arr = [0, 2];
  clearFunc();
  changeFunc();
  // footer.children[0].children[2].style.borderBottom = "12px solid transparent";
  // footer.children[0].children[2].style.borderTop = "12px solid transparent";

  // footer.children[0].children[2].style.borderLeft = "30px solid black";

  // footer.children[0].children[2].style.borderRight = "15px solid transparent";
  // footer.children[0].children[2].style.alignSelf = "center";
  // footer.children[0].children[0].style.border = "white";
  // footer.children[1].children[0].style.border = "white";
  // footer.children[1].children[2].style.border = "white";
});

// 포켓몬 mouseover
footer.children[1].children[1].addEventListener('mouseover', function () {
  arr = [1, 0];
  clearFunc();
  changeFunc();
  // footer.children[1].children[0].style.borderBottom = "12px solid transparent";
  // footer.children[1].children[0].style.borderTop = "12px solid transparent";

  // footer.children[1].children[0].style.borderLeft = "30px solid black";

  // footer.children[1].children[0].style.borderRight = "15px solid transparent";
  // footer.children[1].children[0].style.alignSelf = "center";
  // footer.children[0].children[0].style.border = "white";
  // footer.children[0].children[2].style.border = "white";
  // footer.children[1].children[2].style.border = "white";
});

// 도망치다 mouseover
footer.children[1].children[3].addEventListener('mouseover', function () {
  arr = [1, 2];
  clearFunc();
  changeFunc();
  // footer.children[1].children[2].style.borderBottom = "12px solid transparent";
  // footer.children[1].children[2].style.borderTop = "12px solid transparent";

  // footer.children[1].children[2].style.borderLeft = "30px solid black";

  // footer.children[1].children[2].style.borderRight = "15px solid transparent";
  // footer.children[1].children[2].style.alignSelf = "center";
  // footer.children[0].children[0].style.border = "white";
  // footer.children[0].children[2].style.border = "white";
  // footer.children[1].children[0].style.border = "white";
});

function changeFunc() {
  footer.children[arr[0]].children[arr[1]].style.borderBottom = "12px solid transparent";
  footer.children[arr[0]].children[arr[1]].style.borderTop = "12px solid transparent";
  footer.children[arr[0]].children[arr[1]].style.borderLeft = "30px solid black";
  footer.children[arr[0]].children[arr[1]].style.borderRight = "15px solid transparent";
  footer.children[arr[0]].children[arr[1]].style.alignSelf = "center";
}

function clearFunc() {
  for (let i = 0; i < 2; i++) {
    footer.children[i].children[0].style.border = "white";
    footer.children[i].children[2].style.border = "white";
  }
}

footer.children[0].children[1].addEventListener('click', function () {
  console.log("click");
  modalWarp.style.display = "block";
})

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    if(arr[1] !== 2) {
      arr[1] = arr[1] + 2;
    }
    // for (let i = 0; i < 2; i++) {
    //   footer.children[i].children[0].style.border = "white";
    //   footer.children[i].children[2].style.border = "white";
    // }
    clearFunc();
    changeFunc();
  }
  else if (event.key === 'ArrowLeft') {
    if(arr[1] !== 0) {
      arr[1] = arr[1] - 2;
    }
    // for (let i = 0; i < 2; i++) {
    //   footer.children[i].children[0].style.border = "white";
    //   footer.children[i].children[2].style.border = "white";
    // }
    clearFunc()
    changeFunc();
  }
  else if (event.key === 'ArrowDown') {
    if(arr[0] !== 1) {
      arr[0]++;
    }
    // for (let i = 0; i < 2; i++) {
    //   footer.children[i].children[0].style.border = "white";
    //   footer.children[i].children[2].style.border = "white";
    // }
    clearFunc();
    changeFunc();
  }
  else if (event.key === 'ArrowUp') {
    if(arr[0] !== 0) { 
      arr[0]--;
    }
    // for (let i = 0; i < 2; i++) {
    //   footer.children[i].children[0].style.border = "white";
    //   footer.children[i].children[2].style.border = "white";
    // }
    clearFunc();
    changeFunc();
  }

  // Enter를 누르면 모달창 띄우기
  else if (event.key === 'Enter') {
    if (arr[0] === 0 && arr[1] === 0) {
      console.log("click");
      modalWarp.style.display = "block";
    }else if(arr[0] === 1 && arr[1] === 0 && pokeSelectonWindow){
      pokeSelectWindow();
    }
  }
})