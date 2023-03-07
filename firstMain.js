// pokeAPI
const root = document.getElementById("root");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let pokeFirst = getRandomInt(1, 152);
let pokeSecond = getRandomInt(1, 152);


function imageCreate(imageObj, nth){
  const pokeimage = imageObj;
  const xhr = new XMLHttpRequest();
  const _URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nth}.png`;
  xhr.open("GET",_URL);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.addEventListener("load",function(){
    const objectURL = URL.createObjectURL(xhr.response);
    pokeimage.src = objectURL;
})
}
function nameCreate(textObj, nth){
  const namexhr = new XMLHttpRequest();
  const _nameURL = `https://pokeapi.co/api/v2/pokemon-species/${nth}/`;  
  namexhr.open("GET",_nameURL);
  namexhr.send();
  namexhr.addEventListener("load",function(){
    const objectPoke = JSON.parse(namexhr.response);
    textObj.textContent = objectPoke.names[2].name;
  })
}



// html 구성
root.style.height = "88vh";
root.style.width = "66vh";
root.style.margin = "auto";
let header = document.getElementById("header")
header.style.width = "100%";
header.style.height = "70%";
header.style.position = "relative";
for(let i = 0; i < 4; i++){
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.display = "flex";

  div.style.width = "250px";
  div.style.height = "250px";
  header.appendChild(div);
}
header.children[0].style.top = "10px";
header.children[0].style.left= "10px";
header.children[1].style.bottom= "10px";
header.children[1].style.left= "10px";
header.children[2].style.top= "10px";
header.children[2].style.right= "10px";
header.children[3].style.bottom= "10px";
header.children[3].style.right= "10px";


let pokeFirstImage = document.createElement("img");
header.children[1].appendChild(pokeFirstImage);
let pokeSecondImage = document.createElement("img");
header.children[2].appendChild(pokeSecondImage);

imageCreate(pokeFirstImage, pokeFirst)
// pokeFirstImage.style.transformOrigin = "top left"
// pokeFirstImage.style.scale = "1"
imageCreate(pokeSecondImage, pokeSecond);
// pokeSecondImage.style.transformOrigin = "top left";
// pokeSecondImage.style.scale = "1";

header.children[0].style.flexDirection = "column";
header.children[3].style.flexDirection = "column";

function makeTags(howMany, whatString, mather){
  for(let i = 0; i <howMany; i ++){
    let tag = document.createElement(whatString);
    tag.style.width = "100%";
    tag.style.height = "50%";
    tag.style.position = "flex";
    tag.style.justifyContent = "center";
    tag.style.alignItems = "center";

    tag.style.fontSize = "60px"
    mather.appendChild(tag)
  }
}
makeTags(2,"div",header.children[0]);
makeTags(2,"div",header.children[3]);
nameCreate(header.children[0].children[0], pokeSecond)
nameCreate(header.children[3].children[0], pokeFirst)

