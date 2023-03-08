
function hplose(hp){
  let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c",];
  hp.style.width="50%";
  for(let i=0; i<=colorlist.length; i++){
    setTimeout(function(){
      hp.style.backgroundColor= colorlist[i];      
    }, 300 * i);
  }
}

