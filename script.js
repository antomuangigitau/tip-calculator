const topLeft = document.querySelector('.top-left');
const bottomLeft = document.querySelector('.bottom-left');
const billForm = document.querySelector('.bill-form');
const peopleForm = document.querySelector('.people-form');
const inputNumber = document.querySelector('#input__number');
const peopleInput = document.querySelector('#people__input');
const btns = document.querySelectorAll('.box');
const inputBox = document.querySelector('#input__box');
const tipCurrency = document.querySelector('#tip-amount-currency');
const totalTipCurrency = document.querySelector('#tip-total-currency');
const reset = document.querySelector('.btn');

// Top Input
inputNumber.addEventListener('input', checkInput);

function checkInput() {
  if (Number(inputNumber.value) === 0) {
    inputNumber.value = '';
    topLeft.classList.add('seen');
    billForm.classList.add('error');
    billForm.classList.remove('success');
  } else {
    billForm.classList.add('success');
    topLeft.classList.remove('seen');
  }
}
// bottom input
peopleInput.addEventListener('input', checkPeopleInput);

function checkPeopleInput() {
  if (Number(peopleInput.value) === 0) {
    peopleInput.value = '';
    bottomLeft.classList.add('seen');
    peopleForm.classList.add('error');
    peopleForm.classList.remove('success');
  } else {
    peopleForm.classList.add('success');
    bottomLeft.classList.remove('seen');
  }
}

// buttons
btns.forEach((btn) => {
  btn.addEventListener('click', getTip);
});

function getTip(e) {
  const data = e.currentTarget.dataset.set;
  const tipAmount = parseFloat(inputNumber.value);
  const peopleCount = parseFloat(peopleInput.value);

  switch (data) {
    case 'five':
      tip = (tipAmount * 0.05) / peopleCount;
      total = tipAmount / peopleCount + tip;
      tipCurrency.innerHTML = '$' + tip.toFixed(2);
      totalTipCurrency.innerHTML = '$' + total.toFixed(2);
      break;
    case 'ten':
      tip = (tipAmount * 0.1) / peopleCount;
      total = tipAmount / peopleCount + tip;
      tipCurrency.innerHTML = '$' + tip.toFixed(2);
      totalTipCurrency.innerHTML = '$' + total.toFixed(2);
      break;
    case 'fifteen':
      tip = (tipAmount * 0.15) / peopleCount;
      total = tipAmount / peopleCount + tip;
      tipCurrency.innerHTML = '$' + tip.toFixed(2);
      totalTipCurrency.innerHTML = '$' + total.toFixed(2);
      break;
    case 'twentyfive':
      tip = (tipAmount * 0.25) / peopleCount;
      total = tipAmount / peopleCount + tip;
      tipCurrency.innerHTML = '$' + tip.toFixed(2);
      totalTipCurrency.innerHTML = '$' + total.toFixed(2);
      break;
    case 'fifty':
      tip = (tipAmount * 0.5) / peopleCount;
      total = tipAmount / peopleCount + tip;
      tipCurrency.innerHTML = '$' + tip.toFixed(2);
      totalTipCurrency.innerHTML = '$' + total.toFixed(2);
      break;
  }
}

// custom input box
inputBox.addEventListener('input', function () {
  const customTipValue = Number.parseFloat(inputBox.value);
  tip = ((customTipValue / 100) * parseFloat(inputNumber.value)) / parseFloat(peopleInput.value);
  total = parseFloat(inputNumber.value) / parseFloat(peopleInput.value) + tip;
  tipCurrency.innerHTML = '$' + tip.toFixed(2);
  totalTipCurrency.innerHTML = '$' + total.toFixed(2);
});
// reset
reset.addEventListener('click', resetBtn);

function resetBtn() {
  inputNumber.value = '';
  peopleInput.value = '';
  tipCurrency.innerHTML = '$0.00';
  totalTipCurrency.innerHTML = '$0.00';
  billForm.classList.remove('error');
  billForm.classList.remove('success');
  topLeft.classList.remove('seen');
  peopleForm.classList.remove('error');
  peopleForm.classList.remove('success');
  bottomLeft.classList.remove('seen');
  inputBox.value = '';
}
