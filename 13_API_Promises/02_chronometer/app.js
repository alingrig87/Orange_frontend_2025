const secondsSpan = document.getElementById('seconds-span');
const minutesSpan = document.getElementById('minutes-span');

let seconds = 58;
let minutes = 0;
let timerId = 0;

const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);

function startTimer() {
	timerId = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		showSeconds();
		showMinutes();
	}, 1000);
	startButton.disabled = true;
	stopButton.disabled = false;
	resetButton.disabled = false;
}

function showSeconds() {
	let secondsString = seconds < 10 ? `0${seconds}` : seconds;
	secondsSpan.innerHTML = secondsString;
}

function showMinutes() {
	let minutesString = minutes < 10 ? `0${minutes}` : minutes;
	minutesSpan.innerHTML = minutesString;
}

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopTimer);

function stopTimer() {
	clearTimeout(timerId);
	startButton.disabled = false;
	stopButton.disabled = true;
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetTimer);

function resetTimer() {
	clearInterval(timerId);
	secondsSpan.innerHTML = '00';
	minutesSpan.innerHTML = '00';
	seconds = 0;
	minutes = 0;

	startButton.disabled = false;
	stopButton.disabled = true;
	resetButton.disabled = true;
}
