import "firebase/app";
import "firebase/database";

const timerClock = document.getElementById("timer");
const submitButton = document.getElementById("submitbutton");

export default function timer(seconds) {
  let countdown = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);

      document.getElementById("modaldisplayid").style.display = "block";
      document.getElementById("modalbgid").style.display = "block";

      var scoresRef = firebase.database().ref("scores");
      submitButton.addEventListener("click", () => {
        let newScore = {
          name: document.getElementById("currentscore").value,
          score: Number(document.getElementById("score").innerHTML)
        };
        scoresRef.push(newScore);
      });
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
