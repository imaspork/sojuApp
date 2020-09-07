
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
    desiredElement = '#personal-wrapper'
    introWrapper.classList.add("slideLeftAnimation");
    document.querySelector(desiredElement).style.display = "flex";
    
    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";

        introWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }



    setTimeout(function () {
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        introWrapper.classList.remove("slideLeftAnimation");
        introWrapper.style.display = "none";
        
        
    }, 630);

    personalWrapper.classList.add("slideLeftFromRight");
})

// personal to professional content

document.querySelector('#img-wrapper-personal-right').addEventListener('click', function(e) {
    desiredElement = '#professional-wrapper'
    personalWrapper.classList.add("slideLeftAnimation")
    document.querySelector(desiredElement).style.display = "flex";

    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";

        personalWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }





    setTimeout(function () {
        personalWrapper.style.display = "none";
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        personalWrapper.classList.remove("slideLeftFromRight");
    }, 630);
    professionalWrapper.classList.add("slideLeftFromRight");
})

// professional to hobbies content

document.querySelector('#img-wrapper-professional-right').addEventListener('click', function(e) {
    desiredElement = '#hobbies-wrapper'
    professionalWrapper.classList.add('slideLeftAnimation')
    document.querySelector(desiredElement).style.display = "flex";
    

    
    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";
        
        professionalWrapper.classList.add("slideLeftAnimation")
    } else {
        console.log("Style is not changed!")
    }

    setTimeout(function () {
        // Styling and class adding to slide element to the left to remove it
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        professionalWrapper.classList.remove("slideLeftFromRight")
        professionalWrapper.style.display = "none";
    }, 630);
    hobbiesWrapper.classList.add("slideLeftFromRight");
})



// functions for going backward






document.querySelector('#img-wrapper-hobbies-left').addEventListener('click', function(e) {
    desiredElement = '#professional-wrapper' // desired element is the element to the left of the current element
    
    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";
        document.querySelector(desiredElement).classList.remove('slideLeftAnimation')
        document.querySelector(desiredElement).classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        document.querySelector('#hobbies-wrapper').classList.add('slideRightAnimation')
        
    } else {
        console.log("Style is not changed!")
    }

    setTimeout(function () {
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        document.querySelector('#hobbies-wrapper').classList.remove('slideRightAnimation')
        document.querySelector('#hobbies-wrapper').style.display = "none";
    }, 630);
})


document.querySelector('#img-wrapper-professional-left').addEventListener('click', function (e) {
    desiredElement = '#personal-wrapper' // desired element is the element to the left of the current element

    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";
        document.querySelector(desiredElement).classList.remove('slideLeftAnimation')
        document.querySelector(desiredElement).classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        document.querySelector('#professional-wrapper').classList.add('slideRightAnimation')

    } else {
        console.log("Style is not changed!")
    }

    setTimeout(function () {
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        document.querySelector('#professional-wrapper').classList.remove('slideRightAnimation')
        document.querySelector('#professional-wrapper').style.display = "none";
    }, 630);
})

document.querySelector('#img-wrapper-personal-left').addEventListener('click', function (e) {
    desiredElement = '#intro-wrapper' // desired element is the element to the left of the current element
    
    if (document.querySelector(desiredElement).style.display === "none") {
        document.querySelector(desiredElement).style.display = "flex";
        document.querySelector(desiredElement).classList.remove('slideLeftAnimation')
        document.querySelector(desiredElement).classList.add('slideRightFromLeft')
        // Item to the right of the desired element
        document.querySelector('#personal-wrapper').classList.add('slideRightAnimation')

    } else {
        console.log("Style is not changed!")
    }

    setTimeout(function () {
        document.querySelector(desiredElement).classList.remove('slideRightFromLeft')
        // Items to the right of the desired element
        document.querySelector('#personal-wrapper').classList.remove('slideRightAnimation')
        document.querySelector('#personal-wrapper').style.display = "none";
    }, 630);
})


document.querySelector('#button-project').addEventListener('click', function(e) {
    document.querySelector('#hobbies-wrapper').style.opacity = '0'
    
    setTimeout(function () {
        hobbiesWrapper.style.display = "none";
        document.querySelector('#time-thing-wrapper').style.display = "flex"
        document.querySelector('#time-thing-wrapper').style.opacity = '1'
        document.querySelector('#time-thing-wrapper').classList.add('fadeInAnimation')
    }, 1030);
    
})



// get geolocation
const key = "AIzaSyBGzkyY05335UxV-zAgXhldt7LrPMEg164"; // put in another file later on

var clientLatitude;
var clientLongitude;

document.querySelector('#location-button').addEventListener('click', function(){
    function clientPosition(pos) {
        var crd = pos.coords;

        var clientLatitude = crd.latitude
        var clientLongitude = crd.longitude
        console.log(`Your latitude is ${clientLatitude} and your longitude is ${clientLongitude}`)
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(clientPosition, error);

    console.log(clientLongitude, clientLatitude)

})


document.querySelector('#find-button').addEventListener('click', function () {


    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clientLatitude},${clientLongitude}&key=${key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
        })
        .catch(err => console.warn(err.message));

    document.querySelector('#time-thing').style.opacity = "0";
    
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





