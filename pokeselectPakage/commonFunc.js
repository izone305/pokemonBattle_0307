// //포켓몬 움직이는 함수
// function movePoke(name, time, delay) {
//   // 파라미터로 요소, 진행시간, 딜레이 시간을 받음
//   name.animate([
//   {transform: "translate(0, 0)"},       // keyframes 0%
//   {transform: "translate(100%, -90%)", offset: 0.05},  // keyframes 5%
//   {transform: "translate(100%, -90%)", offset: 0.9},   // keyframes 90%
//   {transform: "translate(0, 0)"},       // keyframes 100%
// ], {
//   duration: time,
//   // 버튼 클릭시 기술이 바로 나가는게 아니라 약간의 딜레이를 줌
//   delay: delay,
// });
// }

// //피격시 깜박임 효과 함수
// function blinkPoke(name, time, delay) {
//   name.animate([
//     {opacity: 1},
//     {opacity: 0},
//     {opacity: 1},
//     {opacity: 0},
//     {opacity: 1},
//   ], {
//     duration: time,
//     delay: delay,
//   });
// }

// //포켓몬 떨어지는 모션 함수
// function dropPoke(name, time, delay) {
//   console.log("test");
//   name.animate([
//     {opacity: 1, transform: "translate(0, 0)"},
//     {opacity: 0, transform: "translate(0, 25%)"},
//   ], {
//     duration: time,
//     delay: delay,
//     fill: "forwards",
//   });
// }

//랜덤으로 포켓몬 추출 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// 상대참조 주의!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let pokelistjson = require("../nowPokeList.json");
let pokeFirst = pokelistjson.pokeIndex[1];
let pokeSecond = pokelistjson.pokeIndex[0];
let pokeSet = pokelistjson.pokeIndex;

// //상대 공격 시 움직임 함수
// function movePokeBackAttack(name, time, delay) {
//   name.animate([
//   {transform: "translate(0, 0)"},       // keyframes 0%
//   {transform: "translate(-100%, 90%)", offset: 0.05},  // keyframes 5%
//   {transform: "translate(-100%, 90%)", offset: 0.9},   // keyframes 90%
//   {transform: "translate(0, 0)"},       // keyframes 100%
// ], {
//   duration: time,
//   // 버튼 클릭시 기술이 바로 나가는게 아니라 약간의 딜레이를 줌
//   delay: delay,
// });
// }

// //상대 공격 통합시켜 놓은 것
// function backAttack(time){
//   cursorNone()
//   let timing = time + getRandomInt(0, 200)
//   let attackTime =  setTimeout(()=>{
//     console.log("back Attack")
//     movePokeBackAttack(header.children[2], 1000, 150);
//     blinkPoke(header.children[1], 200, 250);
//     damage(1,25)
//     cursorDefault()
//   },timing);
//   return  attackTime;
// }

// function cursorNone(){
//   let all = document.getElementsByTagName("*");
//   for(let i = 0; i < all.length;i++){
//     all[i].style.cursor = "none";
//   }
// };
// function cursorDefault(){
//   let all = document.getElementsByTagName("*");
//   for(let i = 0; i < all.length;i++){
//     all[i].style.cursor = "default";
//   }
// };