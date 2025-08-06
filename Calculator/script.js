let currentInput = '0'
let previousInput = ''
let operation = null
let shouldReset = false

function append(number) {
  if (shouldReset) {
    currentInput = ''
    shouldReset = false
  }
  
  if (currentInput === '0') {
    currentInput = number
  } else {
    currentInput += number
  }
  
  update()
}

function setOp(op) {
  if (operation !== null && !shouldReset) {
    calculate()
  }
  
  previousInput = currentInput
  operation = op
  shouldReset = true
  update()
}

function calculate() {
  const prev = parseFloat(previousInput)
  const current = parseFloat(currentInput)
  let result;
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result + ''
  operation = null
  shouldReset = true
  update()
}

function clearOp() {
  currentInput = '0'
  previousInput = ''
  operation = null
  shouldReset = false
  update()
}

function update() {
  document.getElementById('display').textContent = currentInput
}
