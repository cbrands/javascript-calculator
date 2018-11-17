var displayValue = "0";
var evaluated = true;
var result = document.getElementById("result");
result.innerHTML = displayValue;

function addCharacter(character) {
  if(evaluated){
    evaluated = false;
    displayValue = "0";
  }
  if (displayValue == "0") {
    displayValue = character;
  } else {
    displayValue += character;
  }
  result.innerHTML = displayValue;
}

function clearDisplay () {
  displayValue = "0";
  result.innerHTML = displayValue;
}

function evaluateExpression() {
  try {
    displayValue = eval(displayValue);
  } catch (e) {
    if (e instanceof SyntaxError) {
      displayValue = "Error: " + displayValue;
    }
  }
  evaluated = true;
  result.innerHTML = displayValue;
}
