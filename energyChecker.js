let pokeEnergy = [100,100];


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
