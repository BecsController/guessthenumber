document.addEventListener('DOMContentLoaded', start)

function start() {

var generateNumber = Math.floor(Math.random() * 20) + 1;
var answer = document.getElementById("answer");
var submit = document.getElementById("sub");
var reset = document.getElementById("reset");

submit.addEventListener("click", compare);
reset.addEventListener("click", resetGame);

function compare(){

  var guess = document.forms["guessForm"]["fnumber"].value;

  if (guess < generateNumber){
      answer.innerHTML = "It's a bit higher actually";
      answer.classList.toggle('red','orange','green', 'purple');
    } else if (guess >= 21) {
      answer.innerHTML = "Um, 1 - 20 innit?";
      answer.classList.toggle('orange','blue','green','purple','red');
    } else if (guess.length == 0){
      answer.innerHTML = "Aw, c,mon guess!";
      answer.classList.toggle('blue','green','purple','red','orange');
    } else if (guess > generateNumber){
      answer.innerHTML = "It's a bit lower actually";
      answer.classList.toggle('green','purple','red','orange','blue');
    } else if (guess == generateNumber) {
      answer.innerHTML = "Spot on! You're psychic!";
      answer.classList.toggle('purple','red','orange','blue','green');
      reset.classList.toggle("invisible"); //toggle button on
    }
  }; //end compare function
}; //end start function

function resetGame(){
  reset.classList.toggle("invisible"); //toggle button off
  document.forms["guessForm"]["fnumber"].value = "";  //wipe form
  location.reload(); //refresh browser
};
