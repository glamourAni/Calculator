let expressionText = document.getElementById("expression");
let answer = document.getElementById("result");
const numberBtn = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("btnOperator");
const clearCalc = document.getElementById("clear");
let action;
function getExpression() {
    return expressionText.textContent;
}

function getResult() {
    return result.textContent;
}
// clearing the text:AC button
clearCalc.addEventListener("click", function () {
    expressionText.textContent = "0";
    result.textContent = "0";
});
// numbers 1-10
for (const num of numberBtn) {
    console.log(num);
    const displayNum = num.outerText;
    console.log(displayNum);
    num.addEventListener("click", (e) => {
        e.preventDefault();
        if (num !== dot) {
            if (getExpression() === "0") {
                expressionText.textContent = displayNum;
            } else {
                expressionText.textContent += displayNum;
            }
        } else if (!getExpression().includes(".")) {
            expressionText.textContent += ".";
        }
    });
}
// operator keys(/,+,-,*)
for (const operator of operators) {
    console.log(operator);
    operator.addEventListener("click", () => {
        action = operator.textContent;
        if (!(getExpression() === "0")) {
            expressionText.textContent = getExpression() + action;
        }
    });
}

const equalTo = document.getElementById("eq");
equalTo.addEventListener("click", () => {
    result.textContent = eval(getExpression());
});

const percent = document.getElementById("percent");
percent.addEventListener("click", () => {
    action = percent.textContent;
    if (!(getExpression() === "0")) {
        expressionText.textContent = getExpression() + action;
    }
});

const negativeBtn = document.getElementById("prefix");
negativeBtn.addEventListener("click", () => {
    const number = Number(getExpression());
    if (number === Math.abs(number)) {
        expressionText.textContent = "-" + number;
    } else {
        expressionText.textContent = Math.abs(number);
    }
});

// changing from light mode to dark mode

const lightMode = document.getElementsByClassName("bright");
const theme = document.querySelector(".screen");

lightMode.addEventListener("click", () => {
    theme.classList.add("light-theme");
    console.log(theme);
});
