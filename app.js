// button's id start and reset
const start = document.getElementById("start");
const reset = document.getElementById("reset");
// input boxes id hour and minute and sec
const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("sec");
// sound
const audio = document.getElementById("alarm");

//adding eventlistener to the start and reset button
start.addEventListener("click", startfunction);
reset.addEventListener("click", resetFunction);

//start
let startvar = 0;
function startfunction() {
  startIntervel();
}
function startIntervel() {
  startvar = setInterval(() => {
    timer();
  }, 1000);
}

function resetFunction() {
  hour.value = 0;
  min.value = 0;
  sec.value = 0;
  audio.pause();
  stopInterval();
}

// time managment
function timer() {
  if (hour.value == 0 && min.value == 0 && sec.value == 0) {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    console.log("ok value is 0");
    setTimeout(() => {
      audio.play();
    }, 1);
    stopInterval();
  } else if (sec.value != 0) {
    sec.value--;
  } else if (min.value != 0 && sec.value == 0) {
    sec.value = 59;
    min.value--;
  } else if (hour.value != 0 && min.value == 0) {
    min.value = 60;
    hour.value--;
  }
  return;
}

//stoping all the functions
function stopInterval() {
  clearInterval(startvar);
}
