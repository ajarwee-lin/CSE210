// Hamburger Menu
// let allows us to declare a variable
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

// Practice
let myInt = 1; // int
let myString = "Lincoln"; // string
let myBool = false; //  boolean

if (myBool) {
    let myInt2 = 2;   
}

let myBanner = document.querySelector('.banner');