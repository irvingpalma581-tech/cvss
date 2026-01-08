const cards = document.querySelectorAll(".reveal");

function showOnScroll(){
  const windowHeight = window.innerHeight;

  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;

    if(top < windowHeight - 80){
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// efecto parpadeo rojo sutil
setInterval(()=>{
  document.body.style.boxShadow = "inset 0 0 30px rgba(255,0,0,.2)";
  setTimeout(()=>{
    document.body.style.boxShadow = "none";
  },150);
},5000);
