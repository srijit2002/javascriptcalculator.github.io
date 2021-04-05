const buttonInput = document.getElementsByClassName("keypad__btn");
const inputDisplay = document.querySelector(".input__display");
const outputDisplay = document.querySelector(".output__display")
Array.from(buttonInput).forEach(element => {
    element.addEventListener("click", () => {

        showInput(element);
    })
});

function showInput(element) {

    if (element.innerHTML == "AC") {
        inputDisplay.value = "";
        outputDisplay.value = "";
    }
    else if (element.innerHTML == "=") {

        try {
            convertToCalculateableString();


        } catch (error) {
            outputDisplay.value = "Syntax error";
        }
    }
    else {
        inputDisplay.value += element.innerHTML;
    }

}

function convertToCalculateableString() {
    //  bug fixes versio 1.2.0

    // Fixed the issue that it failed to calculate if an non-decimal number has a multiple leading zero before it    
    var regularExpressionForMatching = /[\(\)\+\*\/-]\d+/g;
    var str = `+${document.getElementById("input").value}`;
    var matches = str.match(regularExpressionForMatching);
    matches.forEach(element => {
        var toBeReplaced = `${element.charAt(0)}${parseFloat(element.slice(1, element.length))}`;
        str = str.replace(element, toBeReplaced);
    })
    var calculateAbleString = str.slice(1);


    calculate(calculateAbleString);
}

function calculate(calculateAbleString) {
    var inputCalculation = calculateAbleString;
    var answer = eval(inputCalculation);
    if (isNaN(answer)) {
        outputDisplay.value = "Undefined";
    }
    else {
        outputDisplay.value = answer;
    }
    inputDisplay.value = "";
}

// Dark mode shifter

var isDark = true;


const body = document.querySelector("body");
const buttonMode = document.querySelectorAll(".number");
const calculatorDisplay = document.querySelector(".calculator__display")
const themeButton = document.getElementById("theme--btn");
const calculatorBody = document.querySelector(".calculator");
const numberKey = document.querySelectorAll(".number");
themeButton.addEventListener("click", () => {
    if (isDark) {
        calculatorDisplay.classList.add("light");
        inputDisplay.classList.add("light");
        outputDisplay.classList.add("light");
        themeButton.classList.add("light");
        calculatorBody.classList.add("light");
        body.classList.add("light");
        Array.from(numberKey).forEach(element => {
            element.classList.add("light");
        })
        isDark = false;
    }
    else {
        calculatorDisplay.classList.remove("light");
        inputDisplay.classList.remove("light");
        outputDisplay.classList.remove("light");
        themeButton.classList.remove("light");
        calculatorBody.classList.remove("light");
        body.classList.remove("light");
        Array.from(numberKey).forEach(element => {
            element.classList.remove("light");
        })
        isDark = true;
    }
})