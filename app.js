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
            calculate();

        } catch (error) {
            outputDisplay.value = "Syntax error";
        }
    }
    else {
        inputDisplay.value += element.innerHTML;
    }

}


function calculate() {
    var inputCalculation = document.querySelector(".input__display").value;
    var str="44-0044";
    // testing bug============================================================
    regex=/[\d]^.[0+][1-9]/g;
    console.log(str.replace(regex,""))
   //ends here=================================================================
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