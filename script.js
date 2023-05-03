const gameElements = document.querySelectorAll(
	".game__element"
);
const gameResult = document.querySelector(".game__result");

const userScoreElement =
	document.querySelector("#user__score");
const computerScoreElement = document.querySelector(
	"#computer__score"
);

const computerSelection = ["rock", "paper", "scissors"];
const colorArray = ["#000000", "#1fb811", "#ff4b4b"];

gameElements.forEach((element) => {
	element.addEventListener("click", () => {
		startGame(element.id);
	});
});

let userScore = 0;
let computerScore = 0;

const startGame = (userValue) => {
	const index = Math.floor(Math.random() * 3);
	const computerValue = computerSelection[index];

	if (userValue === computerValue) {
		changeColor(colorArray[0]);
		changeResult(
			`It's a draw ${userValue.toUpperCase()} = ${computerValue.toUpperCase()}`
		);
	} else if (
		(userValue === "rock" && computerValue === "scissors") ||
		(userValue === "paper" && computerValue === "rock") ||
		(userValue === "scissors" && computerValue === "paper")
	) {
		changeColor(colorArray[1]);
		changeResult(
			`You win! ${userValue.toUpperCase()} > ${computerValue.toUpperCase()}`
		);
		userScore++;
	} else if (
		(userValue === "scissors" && computerValue === "rock") ||
		(userValue === "rock" && computerValue === "paper") ||
		(userValue === "paper" && computerValue === "scissors")
	) {
		changeColor(colorArray[2]);
		changeResult(
			`You lose! ${userValue.toUpperCase()} < ${computerValue.toUpperCase()}`
		);
		computerScore++;
	}

	userScoreElement.innerText = userScore;
	computerScoreElement.innerText = computerScore;
};

const changeResult = (string) => {
	gameResult.innerText = string;
	gameResult.style.display = "block";
};

const changeColor = (colorName) => {
	gameResult.style.color = colorName;
};
