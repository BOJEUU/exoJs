let firstNumber = 2;
let secondNumber = 3;
let result = 0;
let yesElement = document.getElementById("yes");

function bojeu() {
    result = firstNumber * secondNumber;
    secondNumber = result;
    return result;
}

while (bojeu() < 250) {
    yesElement.innerHTML += `<li>${result}</li>`;
    console.log(result);
}