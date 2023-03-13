function movePokeBackAttack(name, time, delay) {
  name.animate([
  {transform: "translate(0, 0)"},       // keyframes 0%
  {transform: "translate(-100%, 90%)", offset: 0.05},  // keyframes 5%
  {transform: "translate(-100%, 90%)", offset: 0.9},   // keyframes 90%
  {transform: "translate(0, 0)"},       // keyframes 100%
], {
  duration: time,
  // 버튼 클릭시 기술이 바로 나가는게 아니라 약간의 딜레이를 줌
  delay: delay,
});
}

function backAttack(time){
  cursorNone()
  let timing = time + getRandomInt(0, 200)
  let attackTime =  setTimeout(()=>{
    console.log("back Attack")
    movePokeBackAttack(header.children[2], 1000, 150);
    blinkPoke(header.children[1], 200, 250);
    damage(1,25)
    cursorDefault()
  },timing);
  return  attackTime;
}

function cursorNone(){
  let all = document.getElementsByTagName("*");
  for(let i = 0; i < all.length;i++){
    all[i].style.cursor = "none";
  }
};
function cursorDefault(){
  let all = document.getElementsByTagName("*");
  for(let i = 0; i < all.length;i++){
    all[i].style.cursor = "default";
  }
};
