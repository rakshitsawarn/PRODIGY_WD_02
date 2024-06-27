let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const noteTimeBtn = document.querySelector('.note-time');
const notesContainer = document.querySelector('.notes');

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateDisplay, 1); 
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}


function noteTime() {
  const note = document.createElement('div');
  note.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
  notesContainer.appendChild(note);
}
function resetTimer() {
    clearInterval(timer);
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00:000'; 
    updateDisplay();
    clearNotes();
  }
  
  function clearNotes() {
    notesContainer.innerHTML = '';
  }

  function updateDisplay() {
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
    milliseconds++;
}

function pad(num, size = 2) {
  return num.toString().padStart(size, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
noteTimeBtn.addEventListener('click', noteTime);
