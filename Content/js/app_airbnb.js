const card = document.querySelector("article.card");
const LikeButton = document.querySelector(".card-image button.Like-button");
const clickedClass = "active";

console.log(card);
console.log(LikeButton);

function handleLikeBtnClick() {
    card.classList.toggle(clickedClass);
}

LikeButton.addEventListener("click", handleLikeBtnClick);