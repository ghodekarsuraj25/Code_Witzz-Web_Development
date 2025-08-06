var resultBox = document.getElementById("result");
function start(){
   document.getElementById("question-box").style.display = "grid";
   document.getElementById("main").style.display = "none";
    document.getElementById("pho").style.display = "none";
    document.getElementById("bottom").style.display = "none";
   showQuestion();
}
function MobileView() {
  const texth1 = document.getElementById('h1chenge');
  const textp = document.getElementById('pchenge');
  const bell = document.getElementById('bell');
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
      bell.style.display = "flex";
    texth1.textContent = "Welcome to the Quiz!";
     textp.textContent = "Test your knowledge on a variety of topics, from history to science. Each quiz consists of 10 multiple-choice questions.";
  } else {
      bell.style.display = "none";
    texth1.textContent = "Welcome to the Ultimate Trivia Challenge!";
    textp.textContent = "Test your knowledge across a wide range of topics, from history and science to pop culture and sports. Get ready to challenge yourself and see how you stack up against other trivia enthusiasts!";
  }
}
MobileView();
window.addEventListener("resize", MobileView);
function showResult() {
     document.getElementById("pho").style.display = "flex";
  document.getElementById("container").style.display = "flex";
  document.getElementById("main").style.display = "none";
   document.getElementById("question-box").style.display = "none";
  resultBox.innerHTML = `<h4>85%</h4>`;
}
document.getElementById("dark-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  const img = document.getElementById("logoimg");
  img.src = document.body.classList.contains("dark")
    ? "logos/Depth.png"
    : "logos/whitelogo.png";
  const imgs = document.getElementById("notes");
  imgs.src = document.body.classList.contains("dark")
    ? "logos/Frame 1.png" 
    :"logos/bbell.png" ;
     const imga = document.getElementById("home");
  imga.src = document.body.classList.contains("dark")
     ? "logos/whome.png"
    :  "logos/home.png";
     const imgb = document.getElementById("cat");
  imgb.src = document.body.classList.contains("dark")
    ?"logos/wcat.png"
    :"logos/cat.png";
     const imgc = document.getElementById("lead");
  imgc.src = document.body.classList.contains("dark")
    ? "logos/wlead.png"
    :  "logos/lead.png";
     const imgd = document.getElementById("pro");
  imgd.src = document.body.classList.contains("dark")
    ? "logos/wpro.png"
    : "logos/pro.png";
       const imge = document.getElementById("bell");
  imge.src = document.body.classList.contains("dark")
    ? "logos/sbell.png"
    : "logos/bell.png";
});

