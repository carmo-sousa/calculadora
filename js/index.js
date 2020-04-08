const buttons = document.querySelectorAll(".buttons");
const btnClear = document.querySelector("#btn-clear");
const btnDelete = document.querySelector("#btn-delete");
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const btnPercent = document.querySelector('#btn-percent');

var line1 = document.querySelector("#line-1");
var line2 = document.querySelector("#line-2");

const buttonsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

btnClear.addEventListener("click", () => clear(line1, line2));
btnDelete.addEventListener("click", function () {
  deleteOne(line1);
});
/* Operators */
btnPlus.addEventListener("click", function () {
  setOperators(line1, this);
});

btnMinus.addEventListener("click", function () {
  setOperators(line1, this);
});

btnMultiply.addEventListener("click", function () {
  setOperators(line1, this);
});

btnDivide.addEventListener("click", function () {
  setOperators(line1, this);
});

btnPercent.addEventListener('click', function () {
  setOperators(line1, this);
});

buttons.forEach((button) => {
  if (buttonsArray.indexOf(button.innerHTML.trim(), 0) >= 0) {
    button.addEventListener("click", function () {
      setValue(line1, this);
    });
  }
});

function setValue(display, value) {
  display.innerHTML += value.innerHTML;
}

function clear(display1, display2) {
  line1.textContent = "";
  line2.textContent = "";
}

function setOperators(display, value) {
  let re = /(\+$|\-$|\x$|\/$|\%$)/g;

  if (display.innerHTML.search(re) < 0 && display.innerHTML.length != 0) {
    display.innerHTML += value.innerHTML;
  }
}

function deleteOne(display) {
  let array = display.innerHTML.trim().split("");
  let value = array.slice(0, array.length - 1);
  // console.log(value);
  display.innerHTML = value.join("");
}
