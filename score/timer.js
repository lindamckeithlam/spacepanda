const timerClock = document.getElementById("timer");

export default function timer(seconds) {
  let countdown = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
      alert("times up!");
      return;
    }
    displayTimeLeft(seconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const sec = seconds % 60;
  let display = `00:${sec}`;
  if (sec < 10) {
    display = `00:0${sec}`;
  }
  if (!timerClock.innerHTML) {
    timerClock.innerHTML = "00:00";
  } else {
    timerClock.innerHTML = display;
  }
}
