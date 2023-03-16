
module.exports = function(urlData){
  let name = "./";
  if(urlData === "commonFunc.js"){
    name += urlData;
  }
  else if(urlData === "firstMain.js"){
    name += urlData;
  }
  else if(urlData === "energyChecker.js"){
    name += urlData;
  }
  else if(urlData === "backAttack.js"){
    name += urlData;
  }
  else if(urlData === "modal.js"){
    name += urlData;
  }
  else if(urlData === "footer.js"){
    name += urlData;
  }
  else if(urlData === "skillName.js"){
    name += urlData;
  }
  else if(urlData === "runaway.js"){
    name += urlData;
  }
  else if(urlData === "bag.js"){
    name = "pokeitem/" + urlData;
  }
  else if(urlData === "pokeSelect.js"){
    name = "pokeselectPakage/" + urlData;
  }
  
  //console.log(name);
  return name;
}
