function styleSet(target, w, h, b) {
  target.style.width = w;
  target.style.height = h;
  target.style.border = b;
}

function flexSet(target, d, justy) {
  target.style.display = "flex";
  target.style.flexDirection = d;
  target.style.alignItems = "center";
  target.style.justifyContent = justy;
}

function bagSelectWindow() {
  let bagWholeWindow = window.document.body;
  let bagObject = document.createElement("div");
  bagObject.id = "bagObject";
  bagWholeWindow.appendChild(bagObject);
  bagObject.style.position = "relative";
  bagObject.style.backgroundColor = "white";
  bagObject.style.borderRadius = "20px";
  bagObject.style.border = "6px double black";
  bagObject.style.height = "88vh";
  bagObject.style.width = "66vh";
  bagObject.style.margin = "auto";
  bagObject.style.zIndex = "2";
  bagObject.style.padding = "15px";
  let title = document.createElement("div");
  bagObject.appendChild(title);
  title.innerHTML = "가방";

  let menuWrap = document.createElement("div");
  bagObject.appendChild(menuWrap);
  styleSet(menuWrap, "90%", "10%", "");
  bagObject.children[1].style.justifyContent = "space-evenly";
  flexSet(bagObject.children[1], "row");

  let bagMenu = [];

  for (let i = 0; i < 4; i++) {
    bagMenu[i] = document.createElement("div");
    menuWrap.appendChild(bagMenu[i]);
    styleSet(bagMenu[i], "24%", "70%", "");
  }

  flexSet(bagObject, "column", "");

  for (let i = 0; i < 4; i++) {
    let menuElement = document.createElement("div");
    bagObject.appendChild(menuElement);
  }

  let itemWrap = document.createElement("div");
  bagObject.appendChild(itemWrap);
  styleSet(itemWrap, "90%", "80%", "");

  let menu = [];
  let list = [];

  function menuSelect(target) {
    for (let i = 0; i < 4; i++) {
      menu[i].style.display = "none";
    }
    flexSet(menu[target], "column");
  }
  // menu는 해당 버튼당 생기는 div
  // list는 div안에 생기는 list div
  for (let i = 0; i < 4; i++) {
    menu[i] = document.createElement("div");
    itemWrap.appendChild(menu[i]);
    styleSet(menu[i], "100%", "100%", "");
    flexSet(menu[i], "column", "space-evenly");
    for (let j = 0; j < 6; j++) {
      list[j] = document.createElement("div");
      menu[i].appendChild(list[j]);
      styleSet(list[j], "90%", "10%", "");
      flexSet(list[j], "row", "space-evenly");
    }
  }

  menuSelect(0);

  for (let i = 0; i < 4; i++) {
    flexSet(bagMenu[i], "row", "center");
    bagMenu[i].addEventListener("click", function () {
      menuSelect(i);
    });
  }

  bagMenu[0].textContent = "회복";
  bagMenu[1].textContent = "몬스터볼";
  bagMenu[2].textContent = "배틀";
  bagMenu[3].textContent = "열매";

  // itemList
  let itemObject = {
    healing: [
      "potion",
      "super-potion",
      "max-potion",
      "fresh-water",
      "lemonade",
      "full-restore",
    ],
    pokeball: [
      "master-ball",
      "ultra-ball",
      "great-ball",
      "poke-ball",
      "safari-ball",
      "park-ball",
    ],
    battle: [
      "guard-spec",
      "dire-hit",
      "x-attack",
      "x-defense",
      "x-speed",
      "x-accuracy",
    ],
    berrys: [
      "cheri-berry",
      "chesto-berry",
      "pecha-berry",
      "rawst-berry",
      "aspear-berry",
      "leppa-berry",
    ],
  };

  let itemNumObject = {
    healing: [17, 24, 26, 30, 32, 33],
    pokeball: [1, 2, 3, 4, 5, 6],
    battle: [55, 56, 57, 58, 59, 60],
    berrys: [126, 127, 128, 129, 130, 131],
  };
  //itemObject.test.length = 6; //setter 찾아볼 것

  function itemImg(imgObj, menuName, num) {
    let itmImg = imgObj;
    const itemxhr = new XMLHttpRequest();
    const _URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${menuName[num]}.png`;
    itemxhr.open("GET", _URL);
    itemxhr.responseType = "blob";
    itemxhr.send();
    itemxhr.addEventListener("load", function () {
      const objectURL = URL.createObjectURL(itemxhr.response);
      itmImg.src = objectURL;
    });
  }

  let healingitemImg = [];
  let ballitemImg = [];
  let battleitemImg = [];
  let berryitemImg = [];

  let divItemDetail = {
    healingitemDetail: [],
    ballitemDetail: [],
    battleitemDetail: [],
    berryitemDetail: [],
  };

  // list에 들어가는 item이미지
  for (let i = 0; i < 6; i++) {
    healingitemImg[i] = document.createElement("img");
    menu[0].children[i].appendChild(healingitemImg[i]);
    divItemDetail.healingitemDetail[i] = document.createElement("div");
    menu[0].children[i].appendChild(divItemDetail.healingitemDetail[i]);
    itemImg(healingitemImg[i], itemObject.healing, i);
  }
  for (let i = 0; i < 6; i++) {
    ballitemImg[i] = document.createElement("img");
    menu[1].children[i].appendChild(ballitemImg[i]);
    divItemDetail.ballitemDetail[i] = document.createElement("div");
    menu[1].children[i].appendChild(divItemDetail.ballitemDetail[i]);
    itemImg(ballitemImg[i], itemObject.pokeball, i);
  }
  for (let i = 0; i < 6; i++) {
    battleitemImg[i] = document.createElement("img");
    menu[2].children[i].appendChild(battleitemImg[i]);
    divItemDetail.battleitemDetail[i] = document.createElement("div");
    menu[2].children[i].appendChild(divItemDetail.battleitemDetail[i]);
    itemImg(battleitemImg[i], itemObject.battle, i);
  }
  for (let i = 0; i < 6; i++) {
    berryitemImg[i] = document.createElement("img");
    menu[3].children[i].appendChild(berryitemImg[i]);
    divItemDetail.berryitemDetail[i] = document.createElement("div");
    menu[3].children[i].appendChild(divItemDetail.berryitemDetail[i]);
    itemImg(berryitemImg[i], itemObject.berrys, i);
  }

  function itemDetail(itemNum, num, itemcontent) {
    const itemxhr = new XMLHttpRequest();
    const itemURL = `https://pokeapi.co/api/v2/item/${itemNum[num]}/`;
    itemxhr.open("GET", itemURL);
    itemxhr.send();
    itemxhr.addEventListener("load", function () {
      const objectItem = JSON.parse(itemxhr.response);
      count = 0;
      while (true) {
        if (objectItem.flavor_text_entries[count].language.name === "ko") {
          break;
        }
        count += 1;
        if (count > 20) {
          break;
        }
      }
      itemcontent.textContent = objectItem.flavor_text_entries[count].text;
    });
  }

  for (let i = 0; i < 6; i++) {
    itemDetail(itemNumObject.healing, i, divItemDetail.healingitemDetail[i]);
    itemDetail(itemNumObject.pokeball, i, divItemDetail.ballitemDetail[i]);
    itemDetail(itemNumObject.battle, i, divItemDetail.battleitemDetail[i]);
    itemDetail(itemNumObject.berrys, i, divItemDetail.berryitemDetail[i]);
  }

  //EventListener
  for (let i = 0; i < bagMenu.length; i++) {
    bagMenu[i].addEventListener("mouseover", function () {
      bagMenu[i].style.cursor = "pointer";
    });
  }

  for (let i = 0; i < 6; i++) {
    menu[0].children[i].addEventListener("mouseover", function () {
      menu[0].children[i].style.cursor = "pointer";
    });
    menu[1].children[i].addEventListener("mouseover", function () {
      menu[1].children[i].style.cursor = "pointer";
    });
    menu[2].children[i].addEventListener("mouseover", function () {
      menu[2].children[i].style.cursor = "pointer";
    });
    menu[3].children[i].addEventListener("mouseover", function () {
      menu[3].children[i].style.cursor = "pointer";
    });
  }

  for (let i = 0; i < 6; i++) {
    menu[0].children[i].addEventListener("click", function () {
      menu[0].children[i].style.cursor = "pointer";
      window.location = 'http://localhost:305/battle?id=KDT&password=305';
    });
    menu[1].children[i].addEventListener("click", function () {
      menu[1].children[i].style.cursor = "pointer";
      window.location = 'http://localhost:305/battle?id=KDT&password=305';
    });
    menu[2].children[i].addEventListener("click", function () {
      menu[2].children[i].style.cursor = "pointer";
      window.location = 'http://localhost:305/battle?id=KDT&password=305';
    });
    menu[3].children[i].addEventListener("click", function () {
      menu[3].children[i].style.cursor = "pointer";
      window.location = 'http://localhost:305/battle?id=KDT&password=305';
    });
  }
}

bagSelectWindow();
