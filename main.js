const numberButtons = document.querySelectorAll(".rating-btn");
const submitRatingBtn = document.getElementById("numberRating");
const ratingCard = document.getElementById("ratingCard");
const feedbackCard = document.getElementById("feedbackCard");
const numberRating = document.getElementById("numberRating");
let selectedRating = null;

function handleClickNumberBtn({ target }) {
    removeAllActiveClass();
    target.classList.add("active");
    selectedRating = target.value;
}

function removeAllActiveClass() {
    numberButtons.forEach((button) => button.classList.remove("active"));
}

function handleRatingSubmit() {
    if (!selectedRating) {
        return alert("Please select number rating!");
    }


    numberRating.textContent = selectedRating;
    feedbackCard.classList.remove("hidden");
    initialCard.classList.add("hidden");
}
numberButtons.forEach((button) => {
    button.addEventListener("click", handleClickNumberBtn);
});
submitRatingBtn.addEventListener("click", handleRatingSubmit);