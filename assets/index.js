let ratings = document.getElementsByClassName("rating");
let submitBtn = document.querySelector(".submit-btn");

let ratingInfo = document.querySelector(".rating-info span");
let thankYouCard = document.querySelector(".thank-you-card");

for (let i = 0; i < ratings.length; i++) {
	ratings[i].addEventListener('click', () => {
		ratings[0].classList.remove("rated")
		ratings[1].classList.remove("rated")
		ratings[2].classList.remove("rated")
		ratings[3].classList.remove("rated")
		ratings[4].classList.remove("rated")
		ratings[i].classList.toggle("rated")
	});
	
	submitBtn.addEventListener('click', () => {
		if (ratings[i].classList.contains("rated") == true) {
			ratingInfo.innerHTML = ratings[i].innerHTML;
			thankYouCard.classList.add("active");
		}
	})
}
