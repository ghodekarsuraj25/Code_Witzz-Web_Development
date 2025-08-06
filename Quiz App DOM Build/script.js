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
