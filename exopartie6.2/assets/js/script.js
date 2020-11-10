function fifthteenMultiple(number) {
    if (number % 15 == 0) {
            return true
        } else {
            return false
        }
    }
    const numberListElement = document.getElementById("numberList");
    
    for (let number = 0; number <= 100; number++) {
        if (fifthteenMultiple(number)) {
            numberListElement.innerHTML += `<li>...</li>`;
        } else {
            numberListElement.innerHTML += `<li>${number}</li>`;
        }

    }