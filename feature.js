const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
// const onClick = (event) => {
//   let input = event.target.value;
//   console.log(input);
//   return input;
// };

buttons.forEach((buttoni) => {
  buttoni.addEventListener('click', () => {
    const pressed = buttoni.textContent;

    console.log(pressed);

    if (buttoni.textContent === 'C') {
      display.textContent = '0';
    }
    if (buttoni.textContent)
      if (display.textContent === '0') {
        display.textContent = pressed;
      } else {
        display.textContent += pressed;
      }
  });
});
