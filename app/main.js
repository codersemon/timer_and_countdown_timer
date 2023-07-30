/**
 * Timer scripts
 */

// dom selection
const timerControllerWrap = document.querySelector(".controller-wrap");
const timerOutput = document.querySelector(".timer-output");

// timer variable
let count = 0;
let intervalVar;

/**
 * Start Timer
 */
timerControllerWrap.children[0].onclick = () => {
  intervalVar = setInterval(() => {
    count++;
    timerOutput.innerHTML = timeConverter(count);
  }, 1000);
};

/**
 *
 * @param {*} seconds
 * @returns hour, min, sec
 */
function timeConverter(seconds) {
  let time;
  if (seconds < 60) {
    time = `${seconds} sec`;
  } else if (seconds >= 60 && seconds < 3600) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    time = `${minutes} min : ${remainingSeconds} sec`;
  } else {
    let hours = Math.floor(seconds / 3600);
    let remainingMinutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
    time = `${hours} Hour : ${remainingMinutes} Min : ${remainingSeconds} Sec`;
  }
  return time;
}

/**
 * Pause Timer
 */
timerControllerWrap.children[1].onclick = () => {
  clearInterval(intervalVar);
};

/**
 * Reset Timer
 */
timerControllerWrap.children[2].onclick = () => {
  clearInterval(intervalVar);
  count = 0;
  timerOutput.innerHTML = count;
};

/**
 * Countdown Timer script
 */

// selection
const timerInput = document.getElementById("count_time");
const countdownControls = document.querySelector(".countdown_contorls");
const countDownOut = document.querySelector(".countdown-output");
const msg = document.querySelector("#msg");

// countdown variables
let countDownTime = 0;
let countDownInt;

/**
 * Countdown start
 */
countdownControls.children[0].onclick = () => {
    countDownFunc();
};

// take new time if input changed 
timerInput.onchange = () => {
    countDownTime = timerInput.value.trim();
}

/**
 * countdown function
 */
function countDownFunc(){
      // timer input validation
  if (!timerInput.value.trim()) {
    msg.innerHTML = createAlert("Please type time");
  } else if (!isNumber(timerInput.value)) {
    msg.innerHTML = createAlert("Allowed number only");
  } else {
    msg.innerHTML = createAlert("Countdown Started", "success");

    // add input value to countdown if it's 0 
    if (countDownTime == 0) {
      countDownTime = timerInput.value.trim();
    }

    countDownOut.innerHTML = countDownTime;

    // decrease time
    countDownInt = setInterval(() => {
      countDownTime--;
      countDownOut.innerHTML = countDownTime;

      // clear time when it's become 0
      if (countDownTime == 0) {
        clearInterval(countDownInt);
        countDownOut.innerHTML = "Countdown Ended!";
        msg.innerHTML = "";
      }
    }, 1000);
  }
}

/**
 * Countdown Pause
 */
countdownControls.children[1].onclick = () => {
  clearInterval(countDownInt);
};

/**
 * Countdown reset
 */
countdownControls.children[2].onclick = () => {
  clearInterval(countDownInt);
  countDownTime = 0;
  countDownOut.innerHTML = countDownTime;
  timerInput.value = '';
  msg.innerHTML = createAlert("Countdown Reset Done!", "success");
  
  setTimeout(() => {
      msg.innerHTML = '';
  }, 2000)
};
