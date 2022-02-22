function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  const numberString = document.getElementById("result").value;
  const number = eval(numberString);

  document.getElementById("result").value = number;
}
