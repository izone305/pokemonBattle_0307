// 도망치다 눌렀을 때 나오는 모달 창
// 나중에 for in문 이용해서 동적으로 만들 것
const runAwayWindow = document.createElement('div');
runAwayWindow.style.width = "100%";
runAwayWindow.style.height = "15%";
runAwayWindow.style.position = "absolute";
runAwayWindow.style.bottom = "0px";
runAwayWindow.style.border = "6px double black";
runAwayWindow.style.borderRadius = "20px";
runAwayWindow.style.backgroundColor = "white";
runAwayWindow.style.display = "none";
runAwayWindow.style.fontSize = "2rem";
runAwayWindow.style.alignItems = "center";
runAwayWindow.style.paddingLeft = "5px";
runAwayWindow.style.zIndex = "2";
header.appendChild(runAwayWindow);


// 도망치다 버튼
const runAwayBtn = footer.children[1].children[3];
console.dir(runAwayBtn);
// 도망치다 눌렀을 때
runAwayBtn.addEventListener('click', function() {
  // 모달창을 표시
  runAwayWindow.style.display = "flex";
  // 1~10 중의 랜덤한 수를 받아옴
  const runAwayInt = getRandomInt(1, 10);
  console.log(runAwayInt);
  if(runAwayInt >= 3) {   // 3이상일 경우 도망치기 성공, 모달 창 표시
    // 내 포켓몬이 뒤로 빠지며 사라지는 효과
    runPoke(header.children[1], 900, 350);
    runAwayWindow.textContent = "당신은 도망쳤다";
  } else {   //3 이하일 경우 도망치는데 실패, 모달 창 표시
    runAwayWindow.textContent = "당신은 도망치는데 실패했다";
  }

  // 모달 창 표시 후 2초 뒤에 textContent를 초기화하고 모달창이 안보이도록 처리
  setTimeout(function() {
    runAwayWindow.style.display = "none";
    runAwayWindow.textContent = "";
  }, 2000)
})

// 내 포켓몬이 뒤로 빠지며 사라지는 효과 함수
function runPoke(name, time, delay) {
  name.animate([
  {opacity: 1, transform: "translate(0, 0)"},
  {opacity: 0, transform: "translate(-50%, 30%)"},
], {
  duration: time,
  delay: delay,
  // 뒤로 빠진 뒤에 애니메이션이 초기화 되지 않도록 설정
  fill: "forwards",
});
}