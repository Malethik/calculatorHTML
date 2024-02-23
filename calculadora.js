const display = document.getElementById('display');
const bottons = document.querySelector('button');

// let elem = document.childNodes;
// console.dir(elem);
//console.log(bottons.target.value);

//diplay
const toDisplay = (value) => {
  bottons.target.value += value;
};

document.addEventListener('click', (bottons) => {
  value += bottons.target.value;
  console.log(value);
});

//limpia diplay
// const clearDisplay = () => {
//   display.value = '';
// };
//preparar array
const newExpression = (expression) => {
  const regex = /(\d+(\.\d+)?)\s*([*/+-](\d+(\.\d+)?))+/g;
  return expression.match(regex);
};
//calculate result spostarlo sopra calcolatrice
const calcolateResult = () => {
  try {
    const expression = display.value;
    const result = evaluateExpression(expression); //<= attento!
    display.value = result;
  } catch (error) {
    display.value = 'ERRORE';
  }
};
//calcolatrice
const calculate = (parts) => {
  let result = parseFloat(parts[0]);
  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const operand = parseFloat(parts[i + 1]);
    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
      default:
        throw new Error('Operatore non valido');
    }
  }
  return result;
};
