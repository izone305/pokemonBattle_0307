
function hplose(hp){
  let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c","#CAC531","blue","wihte","pink","black","aquamarine","gray","#Fc5C7D","#6A82FB","38ef7d","#fffbd5","#b20a2c","#CAC531"];
  hp.style.width="50%";
  for(let i=0; i<=0 ; i++){
    setTimeout(function(){
      hp.style.backgroundColor= colorlist[i];      
    }, 500 * i);
  }
}






















