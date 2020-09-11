// defined vars for shorthand
var welcomeWrapper = document.querySelector('#welcome-wrapper')
var introWrapper = document.querySelector('#intro-wrapper')
var intro = document.querySelector('#intro')
var imgWrapper = document.querySelector('#img-wrapper-intro-right')
var personalWrapper = document.querySelector('#personal-wrapper')
var professionalWrapper = document.querySelector('#professional-wrapper')
var professional = document.querySelector('#professional')
var hobbies = document.querySelector('#hobbies')
var hobbiesWrapper = document.querySelector('#hobbies-wrapper')
// welcome button removal function and content load

document.querySelector('#welcome-button').addEventListener('click', function(e) {
    // welcome wrapper disappears
    welcomeWrapper.style.opacity = '0';
    //intro text appears and next button svg appears
    setTimeout(function () {
        introWrapper.classList.add('fadeInAnimation')
        introWrapper.style.opacity = '1';

        welcomeWrapper.style.display = "none";
    }, 1000);
})

// Intro message removal and personal content load
document.querySelector('#img-wrapper-intro-right').addEventListener('click',function(e){
    introWrapper.classList.remove("fadeInAnimation")
    // personal wrapper and intro wrapper class additions
    let desiredElement = document.querySelector('#personal-wrapper')
    introWrapper.classList.add("slideLeftAnimation");
    desiredElement.style.display = "flex";
    
    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";

        introWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }
    // Remove element after off screen animation
    setTimeout(function () {
        desiredElement.classList.remove('slideRightFromLeft')
        introWrapper.classList.remove("slideLeftAnimation");
        introWrapper.style.display = "none";
    }, 630);

    personalWrapper.classList.add("slideLeftFromRight");
})
// personal to professional content
document.querySelector('#img-wrapper-personal-right').addEventListener('click', function(e) {
    let desiredElement = document.querySelector('#professional-wrapper')
    personalWrapper.classList.add("slideLeftAnimation")
    desiredElement.style.display = "flex";

    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";
        personalWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }
    // Remove element after off screen animation
    setTimeout(function () {
        personalWrapper.style.display = "none";
        desiredElement.classList.remove('slideRightFromLeft')
        personalWrapper.classList.remove("slideLeftFromRight");
    }, 630);
    professionalWrapper.classList.add("slideLeftFromRight");
})
// professional to hobbies content
document.querySelector('#img-wrapper-professional-right').addEventListener('click', function(e) {
    let desiredElement = document.querySelector('#hobbies-wrapper')
    professionalWrapper.classList.add('slideLeftAnimation')
    desiredElement.style.display = "flex";
    
    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";
        professionalWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }
    // Remove element after off screen animation
    setTimeout(function () {
        // Styling and class adding to slide element to the left to remove it
        desiredElement.classList.remove('slideRightFromLeft')
        professionalWrapper.classList.remove("slideLeftFromRight")
        professionalWrapper.style.display = "none";
    }, 630);
    hobbiesWrapper.classList.add("slideLeftFromRight");
})
// functions for going backward
document.querySelector('#img-wrapper-hobbies-left').addEventListener('click', function(e) {
    let desiredElement = document.querySelector('#professional-wrapper') // desired element is the element to the left of the current element
    
    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";
        desiredElement.classList.remove('slideLeftAnimation')
        desiredElement.classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        hobbiesWrapper.classList.add('slideRightAnimation')
    } else {
        console.log("Style is not changed!")
    }
    setTimeout(function () {
        desiredElement.classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        hobbiesWrapper.classList.remove('slideRightAnimation')
        hobbiesWrapper.style.display = "none";
    }, 630);
})

document.querySelector('#img-wrapper-professional-left').addEventListener('click', function (e) {
    let desiredElement = document.querySelector('#personal-wrapper') // desired element is the element to the left of the current element

    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";
        desiredElement.classList.remove('slideLeftAnimation')
        desiredElement.classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        document.querySelector('#professional-wrapper').classList.add('slideRightAnimation')

    } else {
        console.log("Style is not changed!")
    }

    setTimeout(function () {
        desiredElement.classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        professionalWrapper.classList.remove('slideRightAnimation')
        professionalWrapper.style.display = "none";
    }, 630);
})

document.querySelector('#img-wrapper-personal-left').addEventListener('click', function (e) {
    let desiredElement = document.querySelector('#intro-wrapper') // desired element is the element to the left of the current element
    if (desiredElement.style.display === "none") {
        desiredElement.style.display = "flex";
        desiredElement.classList.remove('slideLeftAnimation')
        desiredElement.classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        personalWrapper.classList.add('slideRightAnimation')

    } else {
        console.log("Style is not changed!")
    }
    setTimeout(function () {
        desiredElement.classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        personalWrapper.classList.remove('slideRightAnimation')
        personalWrapper.style.display = "none";
    }, 630);
})

document.querySelector('#button-project').addEventListener('click', function(e) {
    hobbiesWrapper.style.opacity = '0'
    
    setTimeout(function () {
        hobbiesWrapper.style.display = "none";
        document.querySelector('#soju-text-wrapper').style.display = "flex"
        document.querySelector('#soju-text-wrapper').style.opacity = '1'
        document.querySelector('#soju-text-wrapper').classList.add('fadeInAnimation')
    }, 1030);
    
})



// get geolocation
const key = "AIzaSyBGzkyY05335UxV-zAgXhldt7LrPMEg164"; // put in another file later on


document.querySelector('#location-button').addEventListener('click', function(){
    let clientPosition = function(pos) {
        localStorage.clear();

        let crd = pos.coords;

        localStorage.setItem('clientLat', JSON.stringify(crd.latitude));
        localStorage.setItem('clientLon', JSON.stringify(crd.longitude));

        console.log(`Your latitude is ${crd.latitude} and your longitude is ${crd.longitude}`)
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(clientPosition, error);
    
})


document.querySelector('#find-button').addEventListener('click', function () {

    let clientLatitude = localStorage.getItem('clientLat');
    let clientLongitude = localStorage.getItem('clientLon')

    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clientLatitude},${clientLongitude}&key=${key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
        })
        .catch(err => console.warn(err.message));

    document.querySelector('#soju-text').style.opacity = "0";
    
    setTimeout(function () {
        
        document.querySelector('#map').classList.add("blurtime")
        document.querySelector('#map').style.opacity = "1"
        document.querySelector('#map').style.display = "flex";
    }, 1030);  
    
    
})






// button js
   
    


var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}