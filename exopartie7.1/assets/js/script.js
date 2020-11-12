let chiffreUnElement = document.getElementById("un");
let chiffreDeuxElement = document.getElementById("deux");
let lolElement = document.getElementById("lol");
function calcul() {
   let result = chiffreUnElement.value * chiffreDeuxElement.value
    lolElement.innerHTML +=  `<button type="button" class="btn btn-danger">${result}</button>`

}