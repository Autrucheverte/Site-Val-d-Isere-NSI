// COOKIES

const cookies = document.querySelector('.cookies');
const close = document.querySelectorAll('.cookies button');

window.onload = () => {
    setTimeout(() => {
        cookies.style.display = "flex"
    }) //, 2000
}
close.forEach(element => {
    element.addEventListener('click', () => {
        cookies.style.display = "none";
    })
});


// CHANGE THEME

let themeColorButton = document.getElementById('theme-color');
let body = document.querySelector('body');

themeColorButton.addEventListener('click', function() {
    themeColorButton.classList.toggle('night');
    body.classList.toggle('night');
})


// PROGRESS BAR

let progressbar = document.getElementById('progressbar');

window.addEventListener('scroll', function(){
    progressbar.style.height = (window.scrollY / (body.clientHeight - window.innerHeight)) * 100 + "%";
})