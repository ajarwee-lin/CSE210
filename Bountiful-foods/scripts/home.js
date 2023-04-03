const mainnav = document.body.querySelector('nav');

const hamButton = document.body.querySelector('.hamButton');

hamButton.addEventListener('click', () => {
    console.log("tes");
    mainnav.classList.toggle('responsive');
})

const date = new Date();
let year = date.getFullYear();


document.querySelector("#year").innerHTML = year;


let currentDate = document.lastModified;

document.querySelector("#date2").innerHTML = currentDate;









