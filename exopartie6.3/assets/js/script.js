let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python']
let tableListElement = document.getElementById("tableList");

languages.forEach(function (bojeu){
    tableListElement.innerHTML += `<li>${bojeu}</li>`;
});




// languages.forEach(element => tableListElement.innerHTML += `<li>${element}</li>`)