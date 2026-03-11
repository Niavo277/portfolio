let btn = document.getElementById("topBtn");

// Flèche scroll
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 100){ btn.style.display = "block"; }
  else{ btn.style.display = "none"; }
});

// Click smooth + glow
btn.addEventListener("click", ()=>{
  btn.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  setTimeout(()=>btn.classList.remove("active"),500);
});

// Particles background
particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#00ffff"},
size:{value:3},
line_linked:{enable:true,color:"#00ffff"}
}
});