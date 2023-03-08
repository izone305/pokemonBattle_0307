// 스킬명 출력
function skillName(nth){

  const skillxhr = new XMLHttpRequest();
  const _skillURL = `https://pokeapi.co/api/v2/pokemon/${nth}/`;
  skillxhr.open("GET",_skillURL);
  skillxhr.send();
  skillxhr.addEventListener("load",function(){
    const objectSkillPoke = JSON.parse(skillxhr.response);

    for(let i = 0; i < ul.children.length; i++) {
      let pokeSkillInt = getRandomInt(0, objectSkillPoke.moves.length);
      // console.log(objectSkillPoke.moves.length);
      ul.children[i].children[0].textContent = objectSkillPoke.moves[pokeSkillInt].move.name;
    };

    //추출된 스킬 넘버 담는 변수 -> 스킬 설명 추출 시 사용됨
    let expArray = [];
    let cnt = 0;

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
      expArray[cnt] = pokeSkillInt;
      cnt++;
      
    }
    console.log(expArray);

    // 집합을 배열로 변환해서 각 스킬명 출력란에 대입
    for(let i = 0; i < getRandomSkill.size; i++) {
      ul.children[i].children[0].textContent = [...getRandomSkill][i];

      //---------------스킬 설명부분 추출-----------------------------------------------
      const skillExpXhr = new XMLHttpRequest();
      const skillExpURL = objectSkillPoke.moves[expArray[i]].move.url;
      skillExpXhr.open("GET",skillExpURL);
      skillExpXhr.send();
      skillExpXhr.addEventListener("load",function(){
        const objectSkillExp = JSON.parse(skillExpXhr.response);
      
        cnt = 0;
        while(true){
          //스킬 설명이 배열로 이루어져 있어 한국어 판별하는 loop문
          if(objectSkillExp.flavor_text_entries[cnt].language.name === "ko"){break;};
          cnt += 1;
          if(cnt > 20){break;} //무한루프 돌 가능성이 있어 20을 넘으면 빠져나오게 처리
        }
        ul.children[i].children[1].textContent = objectSkillExp.flavor_text_entries[cnt].flavor_text;
  
      });
      //-------------------------------------------------------------------------------
    }


  })
}
skillName(pokeFirst);