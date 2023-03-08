
function hplose(hp,hpAmount){
  let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c","#CAC531","blue","wihte","pink","black","aquamarine","gray","#Fc5C7D","#6A82FB","38ef7d","#fffbd5","#b20a2c","red"];
  hp.style.width=`${hpAmount}%`;
  for(let i=0; i<=colorlist.length ; i++){
    setTimeout(function(){
      hp.style.backgroundColor= colorlist[i];      
    }, 10 * i);
  }
}






















