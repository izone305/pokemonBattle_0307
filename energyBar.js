function hplose(hp, hpAmount){ 
  hp.style.width=`${hpAmount}%`; 
  hp.style.background="red"; 
  hp.style.transition ="all 0.6s"
} 
  
function hpfull(hpf){ 
  hpf.style.width="100%"; 
  hpf.style.height="35px";
  hpf.style.display="flex"; 
  hpf.style.background="green"; 
}