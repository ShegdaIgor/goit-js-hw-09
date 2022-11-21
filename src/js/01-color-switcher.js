btnStart = document.querySelector('button[data-start]');
btnStop = document.querySelector('button[data-stop]');

let intervalId = null;

btnStart.addEventListener('click', startBtnHandler);
btnStop.addEventListener('click', stopBtnHandler);
btnStop.setAttribute('disabled', true);

function startBtnHandler() {
  intervalId = setInterval(getBodyColor, 1000);
  btnStop.removeAttribute('disabled');
  btnStart.setAttribute('disabled', true);
}

function stopBtnHandler() {
  clearInterval(intervalId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
}

function getBodyColor() {
  return (document.body.style.backgroundColor = getRandomHexColor());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
