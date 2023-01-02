// PARALLAXE

let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
let mountainLeft = document.getElementById('mountain-left');
let mountainRight = document.getElementById('mountain-right');

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 1 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 0.75 + 'px';
})


// API UNSPLASH

let urlsPosts = [];
let urlsNbr = Math.floor(Math.random()*30);


let url = 'https://api.unsplash.com/search/photos?query=ski&per_page=100&client_id=F4dssp4p9UObie0bYUbqkNyVEj0chYdz7YlcctdG0Bo';

fetch(url)

.then(data => {
    return data.json();
})
.then(data => {
    images = data.results;
})


// API RANDOM USERS

let users = [];

url = 'https://randomuser.me/api/?results=100';

fetch(url)

.then(data => {
    return data.json();
})
.then(data => {
    users = data.results;

    // alert(users[14].login.username);
})


// INFINITE SCROLL

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight + 30 >= document.documentElement.scrollHeight) {
        loadPost();
    }
})

function loadPost() {
    document.querySelector('article').innerHTML += `
    <div class="insta-post">
        <div class="insta-head">
            <div class="pp-insta">
                <img src="${users[urlsNbr%100].picture.large}" alt="" class="pp-insta">
            </div>
            <p class="user-name">${users[urlsNbr%100].login.username}</p>
            <span>&#8230;</span>
        </div>
        <img src="${images[urlsNbr%30].urls.regular}" class="insta-image">
        <div class="insta-bottom">
            <img src="../images/insta-bottom-notliked.jpg" class="insta-buttons" onclick="liked(this)">
            <p class="nbr-likes">${Math.floor(Math.random()*4000)} J'aime</p>
            <p class="insta-description">${users[urlsNbr%100].login.username} <light>${images[urlsNbr%30].alt_description}</light> </light><hashtag>#val_d'isere</hashtag></p>
            <p class="insta-date">IL Y A ${Math.floor(Math.random()*31)} JOURS</p>
        </div>
    </div>
    `
    urlsNbr++;
}


// LIKE

function liked(element) {
    element.classList.toggle('liked');
}