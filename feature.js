const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach((buttoni) => {
  buttoni.addEventListener('click', () => {
    const pressed = buttoni.textContent;

    if (buttoni.textContent === 'C') {
      display.textContent = '0';
      return;
    }
    if (buttoni.textContent === '.') {
      display.textContent = '0' + pressed;
      return;
    }
    if (buttoni.textContent)
      if (display.textContent === '0') {
        display.textContent = pressed;
      } else {
        display.textContent += pressed;
      }
    let output = '0';
    output = display.textContent;
    console.log(output);

    // const calculating = (input) => {
    //   const operations = input.split(/([+/-])/);

    //   for (let i = 0; i < operations.length; i++) {
    //     if (operations[i] === '*' || operations[i] === '/') {
    //       const operando1 = parseFloat(operations[i - 1]);
    //       const operator = operations[i];
    //       const operando2 = parseFloat(operations[i + 1]);
    //       switch (operator) {
    //         case '*':
    //           operations.splice(i - 1, 3, operando1 * operando2);
    //           i -= 2;
    //           break;
    //         case '/':
    //           operations.splice(i - 1, 3, operando1 / operando2);
    //           i -= 2;
    //           break;
    //       }
    //     }
    //   }
    //   let result = parseFloat(operations[0]);
    //   for (let i = 0; i < operations.length; i += 2) {
    //     const operator = operations[i];
    //     const operando2 = parseFloat(operations[i + 1]);
    //     switch (operator) {
    //       case '+':
    //         result += operando2;
    //         break;
    //       case '-':
    //         result -= operando2;
    //         break;
    //     }
    //   }
    //   return result;
    // };

    if (buttoni.textContent === '=') {
    }
  });
});
