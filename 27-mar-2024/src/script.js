var start = document.getElementById("stop");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var startTimer;

function start() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
}

function timer() {
  if (minutes.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  }
}
