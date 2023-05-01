const calculatorResult = document.querySelector(
	"#calculator__result"
);

const calculatorButtons = document.querySelectorAll(
	".calculator__button"
);

calculatorButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		const innerText = button.innerText;

		if (innerText === "C") {
			clearResult();
		} else if (innerText === "=") {
			calculateResult();
		} else {
			appendValue(innerText);
		}
	});
});

const clearResult = () => {
	calculatorResult.value = "";
};

const calculateResult = () => {
	calculatorResult.value = eval(calculatorResult.value);
};

const appendValue = (innerText) => {
	calculatorResult.value += innerText;
};
