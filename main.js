const ratingButtons = document.querySelectorAll(".rating-btn");
const submitRatingBtn = document.getElementById("sumbitRatingBtn");
const ratingCard = document.getElementById("ratingCard");
const feedbackCard = document.getElementById("feedbackCard");
const numberRating = document.getElementById("numberRating");
let selectedRating = "";



function clickRatingBtn({ target }) {
    removeAllActiveClass();
    target.classList.add("active");
    selectedRating = target.value;
}


function removeAllActiveClass() {
    ratingButtons.forEach((button) => button.classList.remove("active"));
}


function ratingSubmit() {
    if (!selectedRating) {
        return alert("Please select number rating!");
    }

    numberRating.textContent = selectedRating;
    feedbackCard.classList.remove("hidden");
    ratingCard.classList.add("hidden");
}

ratingButtons.forEach((button) => {
    button.addEventListener("click", clickRatingBtn);
});
submitRatingBtn.addEventListener("click", ratingSubmit);