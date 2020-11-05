function verifyPassword(){
 var champA = document.getElementById("Password1");
 var champB = document.getElementById("Password2");
 
if (champA.value == champB.value) {
champA.className="borderGreen";
champB.className="borderGreen";
} else {
champA.className="borderRed";
champB.className="borderRed";
}
}