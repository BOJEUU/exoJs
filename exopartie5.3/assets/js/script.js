function verifyPassword() {
    let regexMail = new RegExp(/^[A-Za-z]+[@]+$/);
    let regexName = new RegExp(/^[A-Za-z]+$/);
    let regexAge = new RegExp(/^[0-9]+$/);
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    if (regexName.test(name.value)) {
        name.style.borderColor = "green";
        document.getElementById("errorName").textContent = "";
    } else {
        name.style.borderColor = "red";
        document.getElementById("errorName").textContent = "pas un nom ca mon gars";
    }
    if (regexMail.test(email.value)) {
        email.style.borderColor = "green";
        document.getElementById("errorMail").textContent = "";
    } else {
        email.style.borderColor = "red";
        document.getElementById("errorMail").textContent = "pas un mail ca mon gars";
    }
    if (regexAge.test(age.value)) {
        age.style.borderColor = "green";
        document.getElementById("errorAge").textContent = "";
    } else {
        age.style.borderColor = "red";
        document.getElementById("errorAge").textContent = "pas un age ca mon gars";
    }


}