const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let time = 0;
let running = false;

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  running = true;
  timer = setInterval(() => {
    time++;
    display.textContent = formatTime(time);
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  running = false;
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  time = 0;
  display.textContent = formatTime(time);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
