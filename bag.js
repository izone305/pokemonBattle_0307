function bagSelectWindow() {
  let bagWholeWindow = window.document.body;
  let bagObject = document.createElement("div");
  bagObject.id = "bagObject";
  bagWholeWindow.appendChild(bagObject);
  bagObject.style.position = "relative";
  bagObject.style.backgroundColor = "white";
  bagObject.style.borderRadius = "20px";
  bagObject.style.border = "6px double black";
  bagObject.style.top = "-83vh";
  bagObject.style.height = "88vh";
  bagObject.style.width = "66vh";
  bagObject.style.margin = "auto";
  bagObject.style.zIndex = "2";
  bagObject.style.padding = "15px";
}