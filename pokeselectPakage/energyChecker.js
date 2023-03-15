let pokeEnergy = [100,100];
for(let i = 0;i < pokeSet.length - 1;i++){
  pokeEnergy.push(100);
}
console.log(pokeEnergy);
// pokeEnergy는 포켓몬들의 hp를 나타내는 array입니다
// [내 첫번째 포켓몬hp, 적 포켓몬hp, 내 n번째 포켓몬 hp, ...]

function hplose(hp,hpAmount){
  let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c","#CAC531","blue","wihte","pink","black","aquamarine","gray","#Fc5C7D","#6A82FB","38ef7d","#fffbd5","#b20a2c","red"];
  hp.style.width=`${hpAmount}%`;
  for(let i=0; i<=colorlist.length ; i++){
    setTimeout(function(){
      hp.style.backgroundColor= colorlist[i];      
    }, 10 * i);
  }
}

function youDied(energyAmount){
  if(energyAmount<=0){
    return true;
  }
  else{
    return false;
  }
}

function damage(firstorSecondNum,damageAmountNum){
  let who = firstorSecondNum - 1;
  pokeEnergy[who] -= damageAmountNum;
  if(firstorSecondNum === 2){
    hplose(header.children[0].children[1].children[0].children[0].children[1], pokeEnergy[who])
  }else{
    hplose(header.children[3].children[1].children[0].children[0].children[1], pokeEnergy[who])

  }

  console.log(pokeEnergy[who])
  if(youDied(pokeEnergy[who])){
    return true;
  }
  else{
    return false;
  }
}
