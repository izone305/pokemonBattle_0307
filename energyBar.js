// 50%의 HP감소 함수-몸통박치기
function hplose(hp){ 
  hp.style.width="50%"; 
  hp.style.background="red"; 
  hp.style.borderstyle="solid";
  hp.style.transition ="all 1.5s";
  
  
} 
// 10%의 HP감소 함수-할퀴기
function hplose1(hp){ 
  hp.style.width="10%"; 
  hp.style.background="pink"; 
  hp.style.borderstyle="solid";
  hp.style.transition ="all 1.5s";

  
} 
// 하품으로 조롱할때 반짝반짝
function merong(hp){ 
  hp.style.width=""; 
  hp.style.background="red"; 
  hp.style.borderstyle="solid";
  hp.style.transition ="all 1.5s";
} 




  // hp가 100%프로 일때
function hpfull(hpf){ 
  hpf.style.width="100%"; 
  hpf.style.height="35px";
  hpf.style.display="flex"; 
  hpf.style.background="green"; 
}