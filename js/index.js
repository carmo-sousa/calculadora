const buttons = document.querySelectorAll('.buttons');
const btnClear = document.querySelector('#btn-clear');
const btnDelete = document.querySelector('#btn-delete');
const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnPercent = document.querySelector('#btn-percent');

var display = document.querySelector('#display');

const buttonsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorsArray = ['+', '-', 'x', '/', '%'];

btnClear.addEventListener('click', () => clear(display));
btnDelete.addEventListener('click', function () {
  deleteOne(display);
});

buttons.forEach(button => {
  if (buttonsArray.indexOf(button.innerHTML.trim(), 0) >= 0) {
    button.addEventListener('click', function () {
      setValue(display, this);
    });
  } else if (operatorsArray.indexOf(button.innerHTML.trim(), 0) >= 0) {
    button.addEventListener('click', function () {
      setOperators(display, this);
    });
  }
});

function setValue(display, value) {
  display.innerHTML += value.innerHTML;
}

function clear(display) {
  display.textContent = '';
}

function setOperators(display, value) {
  let re = /(\+$|\-$|\x$|\/$|\%$|\%$)/g;

  if (display.innerHTML.search(re) < 0 && display.innerHTML.length != 0) {
    display.innerHTML += value.innerHTML;
  }
}

function deleteOne(display) {
  let array = display.innerHTML.trim().split('');
  let value = array.slice(0, array.length - 1);
  display.innerHTML = value.join('');
}

function percent(value, display) {}
