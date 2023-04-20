// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
//const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");
const button = document.getElementById("#btnjoke");
document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

async function getJock() {
    debugger;
    const jokeData = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
        headers: {
            'X-RapidAPI-Key': '41c14c778bmsh16d8457c505e5ffp14e6f5jsna650355377da',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    });
    const jokeObj = await jokeData.json();
    if (jokeObj.joke == "undefined") {
        jokeDiv.innerHTML = jokeObj.message;
    }
    else {
        jokeDiv.innerHTML = jokeObj.joke;
    }
    console.log(jokeData);
    console.log(jokeObj.message);
}
// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
    card.classList.toggle("active");
}


// Write your JavaScript code.
//const btn = document.querySelector('.container button');
//const joke = document.querySelector('.container p');
//document.addEventListener('DOMContentLoaded', getJoke)

//btn.addEventListener('click', getJoke);

//function getJoke() {
//    debugger;
//    const settings = {
//        "async": true,
//        "crossDomain": true,
//        "url": "https://dad-jokes.p.rapidapi.com/random/joke",
//        "method": "GET",
//        "headers": {
//            "X-RapidAPI-Key": "41c14c778bmsh16d8457c505e5ffp14e6f5jsna650355377da",
//            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
//        }
//    };

//    $.ajax(settings).done(function (response) {
//        console.log(response);
//    });

//}

//async function getJoke() {
//    const jokeData = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
//        "async": true,
//        "crossDomain": true,
//        //"url": "https://dad-jokes.p.rapidapi.com/random/joke",
//        "method": "GET",
//        headers: {
//            // 'Accept': 'application/json',
//            'X-RapidAPI-Key': '41c14c778bmsh16d8457c505e5ffp14e6f5jsna650355377da',
//            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
//        }
//    });
//    const jokeobj = await jokeData.json();
//    console.log(jokeobj.joke);
//    joke.innerHTML = jokeobj.joke;
//}