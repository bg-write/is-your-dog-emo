console.log('hi. welcome to "is your dog emo."');
/*------------------ Project Outline -----------------------*/
/* ROUND1: Gather The Bones */

// h1 // id="headlineText" class="flex-container"
// static string section that just reads: "is your dog emo." Every other element on the app main page will change, so I want at least one element to stay consistent and keep the eyes engaged throughout the app usage for the user. The overall app "theme" will stem from the presentation of this h1.

// h2 // id="messageText" class="flex-container"
// dynamic string section that returns a string message based on the results of the genrenatorAPI string. If the genrenatorAPI returns a string that contains "emo", then I want to print out a special message saying: "your dog is emo." Otherwise, return "no." If I have time, I want to hide this message, but put out confetti anytime an emo genre comes up randomly. This is the container that will have the most flexiblity and be the most dependent on the results of my button and two divs.

// div // id="randomDogAPIImage" class="flex-container"
// dynamic image section that returns whatever random image is called by the randomDog API. When I click the activateButton, a new image will pop up here. I might run into some tricky parts of making sure the data from the API transfers over correctly to show up on the app screen.

// div // id="genrenatorAPIText" class="flex-container"
// dynamic string section that returns whatever random string is called by the Genrenator API. When I click the activateButton, a new string will pop up here. The results of this string will determine the results of my MessageText.

// div // id="buttonArea" class="flex-container"
// This is the holder for my button, which is required to make flex-container work with the button.

// button // id="activateButton"
// button that initiates a click function that calls both APIs. When I click this button, I want to call both the Genrerator and randomDog APIs in their own separate container elements, which will then determine the result of my messageText results. If I have time, I want the button to first read "let's find out." when a user first uses the app; when they get a result and wish to try again, I want the button to change its text to "try again." When a user refreshes the entire page, the text should return to "let's find out."



/* ROUND2: Create The Skeleton */
// FLEXBOX
// | h1 / id="headlineText" |
// | h2 / id-"messageText" |
// | div / id="randomDogAPIImage"  |
// | div / id="genrenatorAPIText" |
// | div id="buttonArea" |
// 1 column, 5 rows



/* ROUND3: Make The Skeleton Come Alive */



/* ROUND4: Make The Skeleton Spooky */



/*----------- Transparency Report ----------*/



/*-------- Questions Upon Completion -------*/



/*--------------- Constants --------------------------------*/



/*--------------- Variables --------------------------------*/



/*-------- Cached Element References -----------------------*/
const activateBtn = document.getElementById('activateButton');



/*------------ Event Listeners -----------------------------*/
activateBtn.addEventListener('click', ()=> {
    fetch("https://random.dog/woof.json")
    .then((response) => {
        return response.json();
    })
    .then((dog) => {
            console.log(Object.values(dog)[1]);
            let newDog = document.getElementById('randomDogAPIImage');
            newDog.innerHTML = `<div id="dogImageHolder"><img src="${Object.values(dog)[1]}" onerror="src='https://thumbs.dreamstime.com/z/funny-dog-wearing-wig-female-clothes-white-background-48441429.jpg'" alt="dog." width="350px" height="300px"></div>`;
    })
    .catch((err) => {
        console.log(err);
    });
}); // This console.logs a new dog photo with each click of the button AND gets it to the screen! I need to edit the CSS to adjust all photos to certain sizes. And what to do to edit out the error images and the videos?


// Genrenator API call to the same button!
activateBtn.addEventListener('click', ()=> {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
    .then((response) => {
        return response.json();
    })
    .then((genre) => {
        console.log(genre);
        let newGenre = document.getElementById('genrenatorAPIText');
        newGenre.innerHTML = `${genre}.`;
        // the above works fine, don't change it for now!!!
        let newGenreString = JSON.stringify(genre); // turns genre name into a string, don't change
        let newGenreStringUpperCase = newGenreString.toUpperCase(); // uppercase the string, don't change!
        if (newGenreStringUpperCase.includes('EMO')) {
            console.log('yes.');
            let newMessageEmo = document.getElementById('messageText');
            newMessageEmo.innerHTML = `yes.`;
            confetti.start(1500); // confetti!
        } else {
            console.log('no.');
            let newMessageEmo = document.getElementById('messageText');
            newMessageEmo.innerHTML = `no.`;
        }
    })
    .catch((err) => {
        console.log(err);
    });
}); 
// I need to go back to this and combine using Promises!!!



/*---------- Event Listeners (using Promises) ---------------*/
/*
Turning: 
function x(z) {
    console.log(blah + z);
}
function y(err) {
    console.log(blah + err);
}
create(a, x, y);

Into:
create(a).then(x, y);
*/

// If I run out of time, Icebox the idea of cleaning up my code using Promises

/*---------------- Functions -------------------------------*/



/*---------------- And Scene -------------------------------*/
/* and so it is

-bg

(project finished to initial completion and satisfaction: XXX) */