console.log("Working");

// Required Variables
var hr = 0;
var min = 0;
var sec = 0;

var timer = false;

// Stopwatch function is called as user starts the timer
function start() {
  timer = true;
  stopwatch();
}

// timer will be false which will result in stopping the time
function stop() {
  timer = false;
}

// Variables are assigned 0 as user will click Reset
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;

  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}

function stopwatch() {
  if (timer == true) {
    sec = sec + 1;

    // After sec hits 60, it will become 0 and min will be 1
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    // After min hits 60, it will become 0 and hour will be 1
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    setTimeout("stopwatch()", 1000);
  }
}
