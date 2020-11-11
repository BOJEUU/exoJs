function fifthteenMultiple(number,multiple) {
    if (number % multiple == 0) {
            return true
        } else {
            return false
        }
    }
    const numberListElement = document.getElementById("numberList");
    
    for (let number = 0; number <= 100; number++) {
        if (fifthteenMultiple(number,15)) {
            numberListElement.innerHTML += `<li>...</li>`;
        } else {
            numberListElement.innerHTML += `<li>${number}</li>`;
        }

    }