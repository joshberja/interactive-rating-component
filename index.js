const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const userError = document.querySelector(".no-rating-selected");

submitButton.addEventListener("click", () => {
  if (rating.innerText === "") {
    userError.style.display = "block";
  } else {
    thanksContainer.classList.remove("thank-you-hidden");
    mainContainer.style.display = "none";
  }
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("thank-you-hidden");
  mainContainer.style.display = "block";
  //   submitButton.disabled = true;
  rating.innerText = "";
  userError.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerText = rate.innerText;
    userError.style.display = "none";
  });
});
