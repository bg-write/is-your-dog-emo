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



/*---------------- Constants --------------------------------*/
/* OBJECTS THAT DON'T CHANGE AND WE'LL WANT TO REFER TO AND USE OFTEN */
// Make my objects!



/*---------------- Variables --------------------------------*/
/* OBJECTS THAT WE CAN REDIRECT AND MANIPULATE TO HELP US DO THINGS */
// Make my variables!



/*--------- Cached Element References -----------------------*/
//// Add cached element references for the container elements; create the JS code that will select these two boxes and allows us to play with them and make them do things. (.getElementById, or querySelector/All.)
//// Add a cached element reference for the button; create the JS code that'll select the button and allow us to play with it and make it do things. (.getElementById, or querySelector/All.)
// I will need to make a cached element reference for my messageText, but right now I want to make sure I can return my APIs, which are my priority.
const dogContainer = document.getElementById('randomDogAPIImage');
const genreContainer = document.getElementById('genrenatorAPIText');
const activateBtn = document.getElementById('activateButton');



/*------------- Event Listeners -----------------------------*/
/* <SELECT-DOM>.addEventListerner('<event-name>', <callback>); */
// Add an event listener to the button; I want to tell JS that when the user clicks on the button, something will happen. (.addEventListener('click', ...))
activateBtn.addEventListener('click', ()=> {
    fetch("https://random.dog/woof.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}); // This returns my randomDogAPI in console log, it works!



/*----------------- Functions -------------------------------*/
/* reuseable blocks of code performing one task; my verbs */
// Write code for API call and examine response data (test with console.log); When both APIs are called, I want them to return a random value from the API (NOTE: This will likely take the most time to figure out how to apply select.random logic to the data I'm pulling.)
// Tweak event listeners so that the APIs are stored in a variable (test with console.log); Actually put those API calls into those boxes I defined earlier
// Add a function to handle appending a 'box' containing the API to the container element; I want to be able to restart the app with the button and return a new random value for each API.
// Put this all together through a fancy render function! (NOTE: This also will be my biggest challenge going into this, beside the random data logic.)



/*----------------- And Scene -------------------------------*/
/* and so it is

-bg

(project finished to initial completion and satisfaction: XXX) */