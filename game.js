document.addEventListener('DOMContentLoaded', start)

var generateNumber = Math.floor(Math.random() * 20);

function start() {

var guess = document.getElementById("guess").value;
var answer = document.getElementById("answer");
var submit = document.getElementById("sub");

submit.addEventListener("click", function(){
  alert(generateNumber);
  var guess = document.forms["guessForm"]["fnumber"].value;
    alert(guess);
if (guess < generateNumber){
  answer.innerHTML = "It's a bit higher actually";
} else if (guess >= 21 || guess <= 0) {
  answer.innerHTML = "Um, 1 - 20 innit?";
} else if (guess > generateNumber){
  answer.innerHTML = "It's a bit lower actually";
} else if (guess == generateNumber) {
  answer.innerHTML = "Spot on! You're psychic!";
}

  })

}
