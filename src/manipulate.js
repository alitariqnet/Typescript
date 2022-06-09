console.log('inside manipulate.js now');
const ul = document.querySelector('.people');

const people2 = ['umar','ali','hassan'];

let html = ``;

people2.forEach(function(person){

    html += `<li style="color:purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
console.log(ul);


const anchor = document.querySelector('#link');
console.log(anchor.getAttribute(`href`));
anchor.setAttribute('href','https://www.msn.com');
link.innerText = 'MSN';


