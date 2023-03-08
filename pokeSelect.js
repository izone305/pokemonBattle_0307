// pokeSelectWindow()

function pokeMakeTags(howMany, whatString, mather, widthNum){
  for(let i = 0; i <howMany; i ++){
    let tag = document.createElement(whatString);
    tag.style.flex = "1";
    tag.style.position = "flex";
    tag.style.width = widthNum;
    flexSet(tag,"row");
    mather.appendChild(tag);
  }
}

function flexSet(obj,direc){
  obj.style.display = "flex";
  obj.style.flexDirection = direc;
  obj.style.alignItems = "center";
}


function pokeSelectWindow(){
  let wholeWindow = window.document.body;
  let pokeWindow = document.createElement("div");
  pokeWindow.id = "pokeWindow"
  wholeWindow.appendChild(pokeWindow);
  pokeWindow.style.position = "relative";
  pokeWindow.style.backgroundColor = "white";
  pokeWindow.style.borderRadius = "20px";
  pokeWindow.style.border = "6px double black";
  pokeWindow.style.top = "-83vh";
  pokeWindow.style.height = "88vh";
  pokeWindow.style.width = "66vh";
  pokeWindow.style.margin = "auto";
  pokeWindow.style.zIndex = "2";
  pokeWindow.style.padding = "15px"
  flexSet(pokeWindow,"column");
  pokeMakeTags(8,"div",pokeWindow,"100%");
  for(let i =0 ; i <pokeWindow.children.length - 2;i++){
    for(let j = 0; j < 2; j ++){
      let div = document.createElement("div");
      div.style.width = "50%";
      div.style.height = "100%";
      flexSet(div,"row")
      pokeWindow.children[i].appendChild(div);
    }    
  }
  for(let i =0 ; i <6;i++){
    pokeMakeTags(2, "div", pokeWindow.children[i].children[0], "0%");
    pokeWindow.children[i].children[0].children[0].style.flex = "1";
    pokeWindow.children[i].children[0].children[1].style.flex = "2";
    pokeWindow.children[i].children[0].children[0].style.height = "100%";
    pokeWindow.children[i].children[0].children[1].style.height = "100%";
    let img = document.createElement("img");
    pokeWindow.children[i].children[0].children[0].appendChild(img);
  }

  pokeWindow.children[7].style.border = "6px solid black";
  pokeWindow.children[7].style.borderRadius = "10px";
  pokeWindow.children[7].textContent = "포켓몬을 골라 주십시오"
  pokeWindow.children[7].style.fontSize = "30px";
  pokeWindow.children[7].style.paddingLeft = "30px";

  pokeWindow.children[6].textContent = "그만두다"
  pokeWindow.children[6].style.fontSize = "30px";
  pokeWindow.children[6].style.paddingLeft = "30px";
  pokeWindow.children[6].style.cursor = "pointer";
  console.log(pokeSet)
  for(let i =0 ; i <6;i++){
    imageCreate(pokeWindow.children[i].children[0].children[0].children[0],pokeSet[i]);
    nameCreate(pokeWindow.children[i].children[0].children[1], pokeSet[i]);
    pokeWindow.children[i].children[0].children[1].style.paddingLeft = "20px";
    pokeWindow.children[i].children[0].children[1].style.fontSize = "20px";

  }
  pokeWindow.children[6].addEventListener("click",()=>{
    pokeWindow.remove()
  });

}




