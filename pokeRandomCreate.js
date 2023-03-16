const fs = require("fs");
module.exports = {
  pokeRandomCreate : pokeRandomCreate,
  PokeListWrite : PokeListWrite,
  pokeballAddList : pokeballAddList,
  pokeFirstRandom : pokeFirstRandom,
  pokeSelect : pokeSelect
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//객체를 사용하기 때문에 일단 중복 제거했습니다. 근데 중복을 제거하는게 게임 사용자 경험에서도 나을 거 같습니다.
function pokeRandomCreate(n){
  let pokeinMyPoke = {};
  let pokeIndex = [];
  let pokeHp = [];
  while(pokeIndex.length<n){
    let randomNow = getRandomInt(1, 151);
    if(!pokeIndex.includes(randomNow)){
      pokeIndex.push(randomNow);
      pokeHp.push(100);
    }
  };
  pokeinMyPoke["pokeIndex"] = pokeIndex;
  pokeinMyPoke["pokeHp"] = pokeHp;
  return pokeinMyPoke;
}


// nowPokeList와 동일한 폴더에서만 작동합니다.
function PokeListWrite(innercontents){
  fs.writeFile("./nowPokeList.json", JSON.stringify(innercontents), (err)=>{
    if(err){
      console.log("포켓몬 정보를 입력하는데 오류가 발생했습니다.");
    }else{
      console.log("포켓몬 정보를 성공적으로 저장했습니다");
    }
  })
}

// nowPokeList와 동일한 폴더에서만 작동합니다.
// 같은 파일에 PokeListWrite()함수를 쓰고 있습니다
// 같은 파일에 pokeRandomCreate()함수를 쓰고 있습니다
function pokeFirstRandom(){
  PokeListWrite(pokeRandomCreate(4));
}

// nowPokeList와 동일한 폴더에서만 작동합니다.
// 같은 파일에 PokeListWrite()함수를 쓰고 있습니다
function pokeballAddList(pokeIndexNumber){
  let nowpoke = require("./nowPokeList.json");
  nowpoke.pokeIndex.push(pokeIndexNumber);
  nowpoke.pokeHp.push(100);
  if(nowpoke.pokeIndex.length<8){
    PokeListWrite(nowpoke);
  }else{
    console.log("포켓몬이 6마리로 가득차서 추가할 수 없습니다");
  }
}


// pokeballAddList(101)
function pokeSelect(nth){
  let nowpoke = require("./nowPokeList.json");
  if(nowpoke.pokeIndex.length>nth + 1){
    let tempidx = nowpoke.pokeIndex[nth + 1];
    nowpoke.pokeIndex[nth + 1] = nowpoke.pokeIndex[1];
    nowpoke.pokeIndex[1] = tempidx;
    let temphp = nowpoke.pokeHp[nth + 1];
    nowpoke.pokeHp[nth + 1] = nowpoke.pokeHp[1];
    nowpoke.pokeHp[1] = temphp;
    PokeListWrite(nowpoke);
  }
  else{
    console.log("선택하신 포켓몬 창은 비어있습니다.")
  }
}