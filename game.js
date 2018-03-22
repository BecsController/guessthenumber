document.addEventListener('DOMContentLoaded', start)

function start() {

var generateNumber = Math.floor(Math.random() * 20);
var guess = document.getElementById("guess");
var answer = document.getElementById("answer");
var submit = document.getElementById("sub");

submit.addEventListener("click", function(){
  answer.innerHTML = "It's a bit higher actually";
})
}
