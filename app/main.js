/**
 * Timer scripts
 */

// dom selection
const timerControllerWrap = document.querySelector('.controller-wrap');
const timerOutput = document.querySelector('.timer-output');

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
}

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
}

/**
 * Reset Timer 
 */
timerControllerWrap.children[2].onclick = () => {
    clearInterval(intervalVar);
    count = 0;
    timerOutput.innerHTML = count;
}