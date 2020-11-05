function verifyPassword() {
    let regexMail = new RegExp(/^[A-Za-z0-9][@]+$/);
    let regexName = new RegExp(/^[A-Za-z][a-z]+$/);
    let regexAge = new RegExp(/^[0-9]+$/);
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    if (regexName.test(name.value)) {
        name.style.borderColor = "green";
    } else {
        name.style.borderColor = "red";
    }
    if (regexMail.test(email.value)) {
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }
    if (regexAge.test(age.value)) {
        age.style.borderColor = "green";
    } else {
        age.style.borderColor = "red";
    }


}