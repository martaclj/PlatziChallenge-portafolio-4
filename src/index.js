const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
const timerButton = document.querySelector("#timmer--button");
const hero = document.querySelector("#principal");
let secondsValue = 0;
let minutesValue = 0;
let currentChronometer;
let currentButton;

function startChronometer(){
  currentButton = event.target;
  currentButton.disabled = true;
  currentChronometer = setInterval(() => {
    secondsValue += 1;
    if(secondsValue === 60){
      secondsValue = 0;
      minutesValue += 1;
      minutesSpan.textContent = formatValue(minutesValue);
    }
    secondsSpan.textContent = formatValue(secondsValue);
  },10);
}

function formatValue(value){
  return ("0" + value).slice(-2)
}

function stopChronometer(){
  if (currentButton) {
    currentButton.disabled = false;
  }
  clearInterval(currentChronometer);
}

function resetChronometer(){
  secondsValue = 0;
  minutesValue = 0;
  secondsSpan.textContent = "00";
  minutesSpan.textContent = "00";
}

function executeTimer(){
  hero.innerHTML = `
  <h1 class=hero--title>Timer</h1>
  <div class="hero--time">
    <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
  </div>
  <div class="hero--buttons">
    <button onclick="startChronometer()" class="button hero--button" type="button">Start</button>
    <button onclick="stopChronometer()" class="button hero--button" type="button">Stop</button>
    <button onclick="resetChronometer()" class="button hero--button" type="button">Reset</button>
  </div>
  `
}