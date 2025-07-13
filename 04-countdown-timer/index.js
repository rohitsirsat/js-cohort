const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const stopButton = document.getElementById("Stop");
const resumeButton = document.getElementById("Resume");
const Countdowndisplay = document.getElementById("Countdowndisplay");

let clockId = null;
let pauseTime = 0;

startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
resumeButton.addEventListener("click", resumeCountdown);

function startCountdown() {
  let valueinSeconds = parseInt(timeInput.value);

  if (isNaN(valueinSeconds)) {
    Countdowndisplay.innerText = "Please enter the valid number";
    return;
  }

  if (valueinSeconds <= 0) {
    Countdowndisplay.innerText = "Please enter the time in sec greater than 0";
    return;
  }

  clockId = setInterval(function () {
    valueinSeconds--;
    Countdowndisplay.innerText = `Time remaining: ${valueinSeconds} sec`;

    if (valueinSeconds <= 0) {
      clearInterval(clockId);
      Countdowndisplay.innerText = "--Time up--";
    }
  }, 1 * 1000);
}

function stopCountdown() {
  clearInterval(clockId);
  console.log((pauseTime = parseInt(Countdowndisplay.innerText.split(" ")[1])));
  //   pauseTime = parseInt(Countdowndisplay.innerText.split(" ")[0]);
}
