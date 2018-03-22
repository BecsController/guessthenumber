document.addEventListener('DOMContentLoaded', start)

var generateNumber = Math.floor(Math.random() * 20) + 1;


function start() {

var answer = document.getElementById("answer");
var submit = document.getElementById("sub");
var reset = document.getElementById("reset");

submit.addEventListener("click", compare);
reset.addEventListener("click", resetGame);

function compare(){

  alert(generateNumber);
var guess = document.forms["guessForm"]["fnumber"].value;
    alert(guess);

if (guess < generateNumber){
  answer.innerHTML = "It's a bit higher actually";
} else if (guess >= 21) {
  answer.innerHTML = "Um, 1 - 20 innit?";
} else if (guess < 1){
  answer.innerHTML = "Um, 1 - 20 innit?";
} else if (guess > generateNumber){
  answer.innerHTML = "It's a bit lower actually";
} else if (guess == generateNumber) {
  answer.innerHTML = "Spot on! You're psychic!";
  reset.classList.toggle("invisible");
}
  }; //end compare function

}; //end start function

function resetGame(){
  reset.classList.toggle("invisible");
  var generateNumber = Math.floor(Math.random() * 20) + 1;
  document.forms["guessForm"]["fnumber"].value = "";
  start()
};
