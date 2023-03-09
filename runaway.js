
const runaway = getRandomInt(1, 10);
console.log(runaway);
if(runaway >= 3) {
  runPoke(header.children[1], 900, 550);
}

function runPoke(name, time, delay) {
  name.animate([
  {transform: "translate(0, 0)"},
  {transform: "translate(-150%, 30%)", offset: 0.05},
  {transform: "translate(-150%, 30%)", offset: 0.9},
  // {transform: "translate(0, 0)"},
], {
  duration: time,
  delay: delay,
});
}