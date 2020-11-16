let v = document.getElementById("scrollUp");

function scroll() {
    if (document.documentElement.scrollTop > 200) {
        v.style.display = "block"
    } else {
        v.style.display = "none";

    }
}
function bojeu(){
    document.documentElement.scrollTop=0;
}
window.addEventListener("scroll", scroll);
v.onclick=bojeu;