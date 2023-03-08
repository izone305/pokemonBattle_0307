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
    for(let i = 0; i < 3; i++) {
      let pokeSkillInt = getRandomInt(0, objectSkillPoke.moves.length);
      console.log(pokeSkillInt)
      pokeSkillArray[i] = objectSkillPoke.moves[pokeSkillInt].move.name;
      // pokeSkillArray.push(objectSkillPoke.moves[pokeSkillInt].move.name);
      console.log(pokeSkillArray);
    }
  })
}
const pokeSkillArray = [];
skillName(pokeFirst);
console.log(pokeSkillArray);