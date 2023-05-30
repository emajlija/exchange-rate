const currencyElemOne = document.getElementById("currency-one");
const amountElemOne = document.getElementById("amount-one");
const currencyElemTwo = document.getElementById("currency-two");
const amountElemTwo = document.getElementById("amount-two");

const rateElem = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currencyOne = currencyElemOne.value;
  const currencyTwo = currencyElemTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      const rate = data.rates[currencyTwo];
      //console.log(rate);
      rateElem.innerText = `1 ${currencyOne}=${rate} ${currencyTwo}`;
      amountElemTwo.value = (amountElemOne.value * rate).toFixed(2);
    });
}

//event listeners
currencyElemOne.addEventListener("change", calculate);
currencyElemTwo.addEventListener("change", calculate);
amountElemOne.addEventListener("input", calculate);
amountElemTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElemOne.value;
  currencyElemOne.value = currencyElemTwo.value;
  currencyElemTwo.value = temp;
  calculate();
});

calculate();
