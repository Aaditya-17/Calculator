const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector(".display");
const clear = document.querySelector(".clr");
const equal = document.querySelector(".equ");
let equation = "";

// Event listener for the equal button
equal.addEventListener("click", () => {
    try {
        equation = eval(equation); // Evaluate the equation
        display.innerText = equation; // Show result on display
    } catch (error) {
        display.innerText = "Error"; // Handle invalid input
    }
});

// Event listeners for all the buttons except "C" and "="
buttons.forEach((button) => {
    if (button.innerText !== "C" && button.innerText !== "=") {
        button.addEventListener("click", () => {
            equation += button.innerText; // Append clicked button's text to equation
            display.innerText = equation; // Update the display
        });
    }
});

// Event listener for the clear button
clear.addEventListener("click", () => {
    equation = ""; // Reset the equation
    display.innerText = 0; // Reset the display
});
