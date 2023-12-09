const output = document.querySelector('#output');
const lengthPwd = document.querySelector('#lengthPwd');
const checkboxes = {
  smallLetter: document.querySelector('#smallLetters'),
  bigLetters: document.querySelector('#bigLetters'),
  numbers: document.querySelector('#numbers'),
  special: document.querySelector('#special'),
};
const generate = document.querySelector('#generate');
const copy = document.querySelector('#copy');

const AsmallLetters = 'abcdefghijklmnopqrstuvwxyz';
const AbigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Anumbers = '0123456789';
const specialCharacters = '~!@#$%^&*()_-+=<>|';

generate.addEventListener('click', () => {
  output.textContent = generatePwd(lengthPwd.value);
});

copy.addEventListener('click', () => {
  const textToCopy = output.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
  }
});

function getRandom(array) {
  const r = Math.floor(Math.random() * array.length);
  return array[r] || '';
}

function generatePwd(len) {
  const activeControls = Object.values(checkboxes).filter((checkbox) => checkbox.checked);
  let textPwd = '';

  for (let i = 0; i < len; i++) {
    const randomControl = getRandom(activeControls);
    if (randomControl === checkboxes.smallLetter) {
      textPwd += getRandom(AsmallLetters);
    } else if (randomControl === checkboxes.bigLetters) {
      textPwd += getRandom(AbigLetters);
    } else if (randomControl === checkboxes.numbers) {
      textPwd += getRandom(Anumbers);
    } else if (randomControl === checkboxes.special) {
      textPwd += getRandom(specialCharacters);
    }
  }

  return textPwd;
}
