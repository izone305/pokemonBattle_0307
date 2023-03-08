// 스킬명 출력
// 스킬명이 modal.js에서 만들어지는 li의 textContent로 들어가야하는데, 스킬명을 불러오기 전에 이미 li가 만들어져서 데이터 입력이 안되고 있음
function skillName(nth){
  console.log("func 실행")
  const skillxhr = new XMLHttpRequest();
  const _skillURL = `https://pokeapi.co/api/v2/pokemon/${nth}/`;
  skillxhr.open("GET",_skillURL);
  skillxhr.send();
  skillxhr.addEventListener("load",function(){
    const objectSkillPoke = JSON.parse(skillxhr.response);
    for(let i = 0; i < ul.children.length; i++) {
      let pokeSkillInt = getRandomInt(0, objectSkillPoke.moves.length);
      // console.log(objectSkillPoke.moves.length);
      // console.log(pokeSkillInt)
      ul.children[i].children[0].textContent = objectSkillPoke.moves[pokeSkillInt].move.name;
    }
  })
}
const pokeSkillArray = [];
skillName(pokeFirst);