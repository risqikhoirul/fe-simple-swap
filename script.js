const input = document.getElementById("coin");
const output = document.getElementById("stable");
const myCoins = document.getElementById("myCoin");
const usdolar = document.getElementById("usd");

myCoins.addEventListener("change", updateOutput);

usdolar.addEventListener("change", updateOut);

output.addEventListener("input", updateInput);

function swap() {
  alert("Dompet belum terhubung!");
}

function updateInput() {
  input.value = output.value / myCoins.options[myCoins.selectedIndex].value;
}
function updateOut() {
  output.value = input.value / usdolar.options[usdolar.selectedIndex].value;
}

function updateOutput() {
  if (input === document.activeElement) {
    const xcoin = input.value * myCoins.options[myCoins.selectedIndex].value;
    output.value = xcoin;
  } else {
    const xxcoin = usdolar.options[usdolar.selectedIndex].value * output.value;
    input.value = xxcoin;
  }
}

input.addEventListener("input", updateOutput);
