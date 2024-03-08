console.log('Typing Test');

// Timer Countdown
const timer = document.getElementById('timer');
let timeLeft = 60;

function updateTime() {
  timer.innerHTML = `${timeLeft}`;
}

updateTime();

function startTime() {
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--
      updateTime()
    }
  }, 1000);
}
