"use strict";
let timerFunction;
let Display = document.getElementById('Display');
let Input = document.getElementById('Input');
let startButton = document.getElementById('Start');
let resetButton = document.getElementById('Reset');
let Footer = document.getElementById("footer");
let bgChange = document.getElementById("bg-color");
let darkMode = document.getElementById("mode");
// Access the body element
// Access the body element
const bodyElement = document.body;
bgChange.addEventListener("click", () => {
    console.log(darkMode.innerText);
    if (darkMode.innerText == "normal") {
        document.body.style.background = "black";
        startButton.style.color = "black";
        resetButton.style.color = "black";
        Display.style.color = "White";
        darkMode.innerText = darkMode.innerText;
        darkMode.innerText = "dark";
    }
    else if ((darkMode === null || darkMode === void 0 ? void 0 : darkMode.innerText) == "dark") {
        console.log(darkMode.innerText);
        document.body.style.background = "linear-gradient(135deg, #0077b6, #00b4d8)";
        Display.style.color = "black";
        startButton.style.color = "White";
        resetButton.style.color = "White";
        darkMode.innerText = "normal";
        console.log(darkMode.innerText);
    }
});
let isRunning = false;
function startFunction() {
    if (!isRunning) {
        let stringToNumber = eval(Input.value) + 1;
        Footer.style.color = "White";
        if (typeof stringToNumber == "number" && stringToNumber > 0 && stringToNumber < 7201) {
            timerFunction = setInterval(() => {
                let decrement = --stringToNumber;
                if (decrement !== 0) {
                    Display.value = stringToNumber.toString();
                }
                else {
                    Display.value = "Over";
                    clearInterval(timerFunction);
                    isRunning = false;
                }
            }, 1000);
            isRunning = true;
        }
        else if (stringToNumber > 7200) {
            Footer.style.color = "Red";
            alert("You cannot enter more than 7200 seconds.");
        }
    }
}
const resetFunction = () => {
    clearInterval(timerFunction);
    Display.value = "";
    Input.value = Input.value = "";
    isRunning = false;
};
