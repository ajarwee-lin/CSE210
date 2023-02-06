// const input = document.getElementById("favchap");
// const button = document.querySelector("button");
// const list = document.getElementById(".list");

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', Function());

button.addEventListener('click', () => {
const myItem = input.value;
input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = '❌';
list.appendChild(listItem);

listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
});

input.focus();
});