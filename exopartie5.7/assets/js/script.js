//   function bojeu(){
//  let bojeu = document.getElementById("jeu");
//  bojeu.style.transform = "rotate(45deg)";
//   }

let bojeuAdd=1;
let bojeuStart=0;
function bojeu(event){
    let bojeu=document.getElementById("jeu");
    if (event.deltaY<0){
        console.log("up");
        bojeuStart+=bojeuAdd;
        console.log(bojeuStart);
        bojeu.style.transform=`rotate(${bojeuStart}deg)`;

    }else {
        console.log("down");
        bojeuStart-=bojeuAdd;
        console.log(bojeuStart);
        bojeu.style.transform=`rotate(${bojeuStart}deg)`;
    }

}
 