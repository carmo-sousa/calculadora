const buttons = document.querySelectorAll('.buttons');
const btnClear = document.querySelector('#btn-clear');
const btnDelete = document.querySelector('#btn-delete');
const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnPercent = document.querySelector('#btn-percent');
const btnParenthese = document.querySelector('#btn-parenthese');

var display = document.querySelector('#display');

const buttonsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorsArray = ['+', '-', 'x', '/', '%'];

btnParenthese.addEventListener('click', () => parentheses(display));

btnClear.addEventListener('click', () => clear(display));
btnDelete.addEventListener('click', () => deleteOne(display));

buttons.forEach(button => {
  if (buttonsArray.indexOf(button.innerHTML.trim(), 0) >= 0) {
    button.addEventListener('click', function () {
      setValue(display, this.innerHTML);
    });
  } else if (operatorsArray.indexOf(button.innerHTML.trim(), 0) >= 0) {
    button.addEventListener('click', function () {
      setOperators(display, this);
    });
  }
});

function setValue(display, value) {
  display.innerHTML += value;
}

function clear(display) {
  display.textContent = '';
}

function setOperators(display, value) {
  let re = /\+$|\-$|\x$|\/$/g;
  let content = display.innerHTML.trim();

  if (content.search(re) < 0 && content.length != 0) {
    setValue(display, value.innerHTML.trim());
  }
}

function deleteOne(display) {
  let array = display.innerHTML.trim().split('');
  let value = array.slice(0, array.length - 1);
  display.innerHTML = value.join('');
}

function percent(value, display) {}

function parentheses(display) {
  let re = /\+$|\-$|\x$|\/$/g;
  let value = display.innerHTML.trim();
  let array = value.match(/([\(*\)*])/g);

  if (value.length === 0 || re.test(value)) {
    setValue(display, '(');
  } else if (/[0-9%]+$/g.test(value) && !re.test(value) && array[array.length - 1] != ')') {
    setValue(display, ')');
  }
}

/*
  let re = /([\(*\)*])/g;
  let control = /\+$|\-$|\x$|\/$/g;
  let value = display.innerHTML;
  let array = value.match(re);
  console.log(array);

  if (re.test(value)) {
    if (array[array.length - 1] == '(') {
      if (value.search(/\([0-9]+/g) >= 0) {
        if (control.test(value)) {
          setValue(display, '(');
        }
      }
    } else if (array[array.length - 1] == ')') {
      if (/\)$/g.test(value)) {
        setValue(display, 'x(');
      } else if (/[0-9]+$/g.test(value)) {
        setValue(display, ')');
      }
    }
  } else if (!re.test(value) && value.length == 0) {
    setValue(display, '(');
  }
*/
