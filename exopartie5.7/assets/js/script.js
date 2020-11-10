// const pTextElement = document.getElementById("pText");

// function upSize() {
//     pTextElement.style.fontSize = "2rem";
// }

// pTextElement.onwheel = upSize;

const titleElement = document.getElementById("title");
const subTitleElement = document.getElementById("subTitle");

subTitleElement.onclick = changeColor ;

function changeColor(){
    titleElement.style.color = "red";
}




































// let bojeuAdd=10;
// let bojeuStart=0;
// function bojeu(event){
//     let bojeu=document.getElementById("jeu");
//     if (event.deltaY<0){
//         console.log("up");
//         bojeuStart+=bojeuAdd;
//         console.log(bojeuStart);
//         bojeu.style.transform=`rotate(${bojeuStart}deg)`;

//     }else {
//         console.log("down");
//         bojeuStart-=bojeuAdd;
//         console.log(bojeuStart);
//         bojeu.style.transform=`rotate(${bojeuStart}deg)`;
//     }

// }