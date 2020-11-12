let firstNumber = 10;
let secondNumber = 2;
let result = 0;
let yesElement = document.getElementById("yes");

function bojeu() {
    result = firstNumber / secondNumber;
    firstNumber = result;
    return result;
}

while (bojeu() > 1) {
    yesElement.innerHTML += `<li>${result}</li>`;
    console.log(result);
}