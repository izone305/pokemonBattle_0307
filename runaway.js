


const runAwayBtn = footer.children[1].children[3];
console.dir(runAwayBtn);
runAwayBtn.addEventListener('click', function() {
  const runAwayInt = getRandomInt(1, 10);
  console.log(runAwayInt);
  if(runAwayInt >= 3) {
    runPoke(header.children[1], 900, 350);
  } else {
    console.log("도망치지 못했다");
  }
})

function runPoke(name, time, delay) {
  name.animate([
  {opacity: 1, transform: "translate(0, 0)"},
  {opacity: 0, transform: "translate(-50%, 30%)"},
], {
  duration: time,
  delay: delay,
  fill: "forwards",
});
}