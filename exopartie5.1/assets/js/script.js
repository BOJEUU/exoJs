function verifyPassword(){
 var champA = document.getElementById("Password1");
 var champB = document.getElementById("Password2");
 
if (champA.value == champB.value) {
champA.style.borderColor = "green";
champB.style.borderColor = "green";
} else {
champA.style.borderColor = "red";
champB.style.borderColor = "red";
}
}