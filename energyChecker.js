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
  console.log(pokeEnergy[who])
  if(youDied(pokeEnergy[who])){
    alert("죽었당")
  }
}
