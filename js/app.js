/*-------- Cached Element References -----------------------*/
const activateBtn = document.getElementById('activateButton');

/*------------ Event Listeners -----------------------------*/
activateBtn.addEventListener('click', () => {
	fetch('https://random.dog/woof.json')
		.then((response) => {
			return response.json();
		})
		.then((dog) => {
			let newDog = document.getElementById('randomDogAPIImage');
			newDog.innerHTML = `<div id="dogImageHolder" class="flex-container"><img src="${
				Object.values(dog)[1]
			}" onerror="src='https://thumbs.dreamstime.com/z/funny-dog-wearing-wig-female-clothes-white-background-48441429.jpg'" alt="dog." width="350px" height="300px"></div>`;
		})
		.catch((err) => {
			console.log(err);
		});
});

activateBtn.addEventListener('click', () => {
	fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
		.then((response) => {
			return response.json();
		})
		.then((genre) => {
			let newGenre = document.getElementById('genrenatorAPIText');
			newGenre.innerHTML = `${genre}.`;
			let newGenreString = JSON.stringify(genre);
			let newGenreStringUpperCase = newGenreString.toUpperCase();
			if (newGenreStringUpperCase.includes('EMO')) {
				let newMessageEmo = document.getElementById('messageText');
				newMessageEmo.innerHTML = `(yes.)`;
				confetti.start(1500);
			} else {
				let newMessageEmo = document.getElementById('messageText');
				newMessageEmo.innerHTML = `(no.)`;
			}
		})
		.catch((err) => {
			console.log(err);
		});
});
