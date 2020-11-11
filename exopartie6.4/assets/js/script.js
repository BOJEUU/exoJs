let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let tableListElement = document.getElementById("tableList");

function bojeu(day){
    if(day == 'Samedi' || day == 'Dimanche'){
        return true;
      } else {
          return false
      }
}
days.forEach(function (day){
   if (bojeu(day)){
    tableListElement.innerHTML += `<li class="caca">${day}</li>`;
    console.log(day)
   }else{
    tableListElement.innerHTML += `<li>${day}</li>`;
   }
});