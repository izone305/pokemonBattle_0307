// 파라미터로 요소, 진행시간, 딜레이 시간을 받음
function movePoke(name, time, delay) {
  name.animate([
  {transform: "translate(0, 0)"},       // keyframes 0%
  {transform: "translate(100%, -90%)", offset: 0.05},  // keyframes 5%
  {transform: "translate(100%, -90%)", offset: 0.9},   // keyframes 90%
  {transform: "translate(0, 0)"},       // keyframes 100%
], {
  duration: time,
  // 버튼 클릭시 기술이 바로 나가는게 아니라 약간의 딜레이를 줌
  delay: delay,
});
}

// 실행
movePoke(header.children[1], 1000, 150);