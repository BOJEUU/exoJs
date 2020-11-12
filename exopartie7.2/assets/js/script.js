let bojeuElement = document.getElementById("bojeu");

function gras() {
    if (bojeuElement.style.fontWeight == 'bold') {
        bojeuElement.style.fontWeight = 'normal';
    } else {
        bojeuElement.style.fontWeight = 'bold';
    }
}

function rouge() {
    if (bojeuElement.style.color == 'red') {
        bojeuElement.style.color = 'black';
    } else {
        bojeuElement.style.color = 'red';
    }
}
function agrandir() {
    if (bojeuElement.style.fontSize == '2rem') {
        bojeuElement.style.fontSize = '1rem';
    } else {
        bojeuElement.style.fontSize = '2rem';
    }
}