# is your dog emo.

## Getting Started:
https://is-your-dog-emo.surge.sh/

### is your dog emo.
An app that pulls a random genre name from the Genrenator API and a random dog image from the RandomDog API (both found [here](https://github.com/bg-write/public-apis)) to answer life's great question: Is your dog emo? Or is your dog into Dominican Punk Chileno? Maybe Canadian R&B House? Let's find out!

This app was inspired by [is this band emo](http://isthisbandemo.com/) and [Cap N' Jazz](https://capnjazz.bandcamp.com/album/analphabetapolothology).

### Original wireframe
![wireframe](https://i.imgur.com/KysXxtq.png)

### Postman: Genrenator API
![genrenator](https://i.imgur.com/ckNV7bk.png)

### Postman: RandomDog API
![randomdog](https://i.imgur.com/JPejoUS.png)

### Final app:
#### New screen
![new screen](https://i.imgur.com/CoEZNTM.png)
--


#### After clicking button
![after clicking button](https://i.imgur.com/vWw0ChF.png)
--


#### Mobile view
![mobile view](https://i.imgur.com/qVqFLti.png)
--


### Technologies Used:
* JavaScript  
* HTML  
* CSS  
* Postman  
* app.diagrams.net  
* Genrenator API  
* RandomDog API  
* GitHub  
* Git  
* Mac Terminal  
* Visual Studio Code  
* Google Chrome DevTools (and, like, just Google)  
* Bootstap  
* Coffee  
* Naps  
* Breaks  
* Calling my mom  
* Decent nights' sleep  

### A Guide To The Code:
#### index.html
* Includes external scripts and links for Bootstrap and confetti design.
* 10 IDs, 1 Class (flex container).

#### style.css
* Font Family:  
  * monospace  
* Colors:  
  * #ffd87d (dull gold)  
  * #fdf2b0 (lighter gold)  
  * #f79d85 (darker pink)  
  * #f6b998 (lighter pink)  
  * #9ec0e0 (blue)
* Media query accomodating a mobile-friendly max-width of 767px.

#### app.js
* Was able to complete JS with only one cached element reference and two event listeners targeting the same click event (the button). However, the JS could be more DRY by using more predefined constants, variables, and functions.
* My favorite function: In the genre event listener, the added JSON.stringify() was the breakthrough I needed to complete the JS.

### Biggest Challenge:
Streamlining my event listeners to make new images and text consistent and fluid. Took much trial and error to get the exact results I needed.

### Key Learnings/Takeaways:
* I enjoy CSS and playing with design, yet I found JS to be more rewarding (when it works!).
* I'm sure there's a way to simplify the code to make it more powerful to accomodate more complex APIs. I chose two simple (and already randomizing) APIs, and I'm curious if the JS could handle more complicated data.

### Next Steps (icebox):
* Incorporate more fluid design, especially for mobile.
* More specific If Statement: Right now, words like "emotion" return a "yes" message.
* Set up a JS function that changes the colors of a few random letters of a string; would like to match the genre names to match the multi-color lettering of the Cap'N Jazz album cover.

### Original pseudocode for app design (BIG PICTURE):
1. Gather the bones: In my README, define all the elements that I need and their relationships to each other; which ones are just pretty to look at, which ones will interact with other elements, and how it’ll all come together.
2. Put together the bones: First draft of my HTML, CSS, and JS code to put everything into my workspace.
3. Make the skeleton come alive: Second draft of HTML, CSS, and JS code, focusing on JS logic and make the browser do what I want it to do.
4. Make the skeleton spooky: Third and final draft of HTML, CSS, and JS code, focusing on CSS responsive design and overall simple, DRY coding.

### Original pseudocode (THE ACTUAL STEPS):
1. Add the HTML button that'll activate both APIs; when I press this button, I want both APIs to pull data and return their results to the app.
2. Add container element for the 'box' components to be appended to as children; I need two container elements, one for each API data result.
3. Add cached element references for the container elements; create the JS code that will select these two boxes and allow us to play with them and make them do things.
4. Add a cached element reference for the button; create the JS code that'll select the button and allow us to play with it and make it do things.
5. Add an event listener to the button; I want to tell JS that when the user clicks on the button, something will happen.
6. Write code for API call and examine response data (test with console.log); When both APIs are called, I want them to return a random value from the API (NOTE: This will likely take the most time to figure out how to apply select.random logic to the data I'm pulling.)
7. Tweak event listeners so that the APIs are stored in a variable (test with console.log); Actually put those API calls into those boxes I defined earlier
8. Create a test 'card' element with Bootstrap; start making this look nice and actually return the data I want and how I want it to look
9. Add a function to handle appending a 'box' containing the API to the container element; I want to be able to restart the app with the button and return a new random value for each API.
10. Style each box differently, based on what API is being pulled; get creative
11. Once logic is sound and turns data I want, make app more visually appealing and creative; incorporate images, animations, sounds, etc
12. Add confetti; for Ben

-bg