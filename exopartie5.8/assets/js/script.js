function bojeu() {
    let yes = document.getElementById("name");
    let yesyes = document.getElementById("age");
    let parent = document.getElementById("parentForm");

    let yesS = yes.cloneNode(true);
    let yesSS = yesyes.cloneNode(true);
    yesS.id = "name1";
    yesSS.id = "age1";
    parent.parentNode.appendChild(yesS);
    parent.parentNode.appendChild(yesSS);

}