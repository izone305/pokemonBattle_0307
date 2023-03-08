// 스킬명 출력
// 스킬명이 modal.js에서 만들어지는 li의 textContent로 들어가야하는데, 스킬명을 불러오기 전에 이미 li가 만들어져서 데이터 입력이 안되고 있음
function skillName(nth){
  //console.log("func 실행")
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

      //---------------스킬 설명부분 추출-----------------------------------------------
      const skillExpXhr = new XMLHttpRequest();
      const skillExpURL = objectSkillPoke.moves[pokeSkillInt].move.url;
      skillExpXhr.open("GET",skillExpURL);
      skillExpXhr.send();
      skillExpXhr.addEventListener("load",function(){
        const objectSkillExp = JSON.parse(skillExpXhr.response);
      
        let cnt = 0;
        while(true){
          //스킬 설명이 배열로 이루어져 있어 한국어 판별하는 loop문
          if(objectSkillExp.flavor_text_entries[cnt].language.name === "ko"){break;};
          cnt += 1;
          if(cnt > 20){break;} //무한루프 돌 가능성이 있어 20을 넘으면 빠져나오게 처리
        }
        ul.children[i].children[1].textContent = objectSkillExp.flavor_text_entries[cnt].flavor_text;

      });
      //-------------------------------------------------------------------------------
    };

    
  })
}
const pokeSkillArray = [];
skillName(pokeFirst);