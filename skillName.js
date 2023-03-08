// 스킬명 출력
function skillName(nth){
  const skillxhr = new XMLHttpRequest();
  const _skillURL = `https://pokeapi.co/api/v2/pokemon/${nth}/`;
  skillxhr.open("GET",_skillURL);
  skillxhr.send();
  skillxhr.addEventListener("load",function(){
    const objectSkillPoke = JSON.parse(skillxhr.response);

    // 중복 방지를 위한 집합 생성
    const getRandomSkill = new Set();
    // 집합의 크기가 ul.li의 길이보다 작으면 참, 반복
    while(getRandomSkill.size < ul.children.length) {
      // 랜덤 함수
      let pokeSkillInt = getRandomInt(0, objectSkillPoke.moves.length);
      // 랜덤한 스킬명을 가져옴
      let getRandomSkillData = objectSkillPoke.moves[pokeSkillInt].move.name;
      // 집합에 동일한 스킬명이 있는지 체크
      if(getRandomSkill.has(getRandomSkillData) === false) {
        // 집합에 없는 스킬명이라면 집합에 추가
        getRandomSkill.add(getRandomSkillData);
      }
    }
    // 집합을 배열로 변환해서 각 스킬명 출력란에 대입
    for(let i = 0; i < getRandomSkill.size; i++) {
      ul.children[i].children[0].textContent = [...getRandomSkill][i];
    }
  })
}
skillName(pokeFirst);