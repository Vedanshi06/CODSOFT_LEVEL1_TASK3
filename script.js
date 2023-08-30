const display = document.getElementById("display");
const buttons = document.querySelectorAll(".num-btn, .operator-btn");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
});

calculateButton.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
