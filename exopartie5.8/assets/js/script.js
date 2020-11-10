// function bojeu() {
//     let yes = document.getElementById("name");
//     let yesyes = document.getElementById("age");
//     let parent = document.getElementById("parentForm");

//     let yesS = yes.cloneNode(true);
//     let yesSS = yesyes.cloneNode(true);
//     yesS.id = "name1";
//     yesSS.id = "age1";
//     parent.parentNode.appendChild(yesS);
//     parent.parentNode.appendChild(yesSS);

// }
let houleParent = document.getElementById("parentForm");
let houletBtn = document.getElementById("btnTxt");

houletBtn.onclick = houleDuplicated;

function houleDuplicated() {
    let houleNode = document.getElementById("houleNode");
    let houleNodeCopy = houleNode.cloneNode(true);

    houleParent.appendChild(houleNodeCopy);
}