'use strict'

const adv = document.querySelector('.adv');
const book = document.querySelectorAll('.book');
const books = document.querySelector('.books');
const list = document.getElementsByTagName('ul');
const listItem = document.querySelectorAll('li');
const chapter = document.querySelector('.chapter');
const bodyBack = document.body;
const titleBooks = document.getElementsByTagName('h2');

//1
book[1].remove();
book[2].remove();
book[3].remove();
book[5].remove();
books.prepend(book[1]);
books.append(book[3])
books.append(book[5])
books.append(book[2])
//2
bodyBack.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
//3
titleBooks[2].innerHTML = '<a>Книга 3. this и Прототипы Объектов</a>';
//4
adv.style.display = 'none';
//5
listItem[2].remove();
list[1].prepend(
    listItem[0],
    listItem[1],
    listItem[3],
    listItem[6],
    listItem[8],
)

list[4].prepend(
    listItem[46],
    listItem[47], 
    listItem[55], 
    listItem[49],
    listItem[50],
    listItem[48],
    listItem[52],
    listItem[53]
    )
//6
listItem[25].insertAdjacentHTML('beforeend', `<li>Глава 8: За пределами ES6</li>`);




