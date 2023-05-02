const stopwatchNumber = document.querySelector(
	".stopwatch__number"
);

const stopwatchButtons = document.querySelectorAll(
	".stopwatch__button"
);

stopwatchButtons.forEach((button) => {
	button.addEventListener("click", () => {
		switch (button.id) {
			case "start":
				startTimer();
				break;
			case "stop":
				stopTimer();
				break;
			case "reset":
				resetTimer();
				break;
		}
	});
});

let hours = 00;
let minutes = 00;
let seconds = 00;
let timer = null;

const startTimer = () => {
	if (timer !== null) {
		console.log(timer);
		clearInterval(timer);
	}
	timer = setInterval(runningTimer, 1000);
};
const runningTimer = () => {
	seconds++;
	if (seconds == 60) {
		seconds = 0;
		minutes++;
		if (minutes == 60) {
			minutes = 0;
			hours++;
		}
	}

	let hoursFormatted = hours < 10 ? `0${hours}` : hours;
	let minutesFormatted =
		minutes < 10 ? `0${minutes}` : minutes;
	let secondsFormatted =
		seconds < 10 ? `0${seconds}` : seconds;

	stopwatchNumber.innerText = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
};

const stopTimer = () => {
	clearInterval(timer);
};

const resetTimer = () => {
	clearInterval(timer);
	hours = 0;
	minutes = 0;
	seconds = 0;
	stopwatchNumber.innerText = "00:00:00";
};
