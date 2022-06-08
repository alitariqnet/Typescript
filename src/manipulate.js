const ul = document.getElementsByClassName('people');

const people2 = ['umar','ali','hassan'];

let html = ``;

people2.forEach(function(person){

    html += `<li style="color:purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
console.log(ul);