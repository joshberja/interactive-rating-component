// Selecting the main container and thank you container elements
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");

// Selecting the submit button, rate again button, rating element, rates buttons, and user error message
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
const userError = document.querySelector(".no-rating-selected");

// Event listener for the submit button
submitButton.addEventListener("click", () => {
  // Checking if the rating is empty
  if (rating.textContent.trim() === "") {
    userError.style.display = "block"; // Displaying the user error message
  } else {
    thanksContainer.classList.remove("thank-you-hidden"); // Removing the hidden class from the thank you container
    mainContainer.style.display = "none"; // Hiding the main container
  }
});

// Event listener for the rate again button
rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("thank-you-hidden"); // Adding the hidden class to the thank you container
  mainContainer.style.display = "block"; // Displaying the main container
  rating.textContent = ""; // Resetting the rating text
  userError.style.display = "none"; // Hiding the user error message
});

// Event listeners for the rate buttons
for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", () => {
    rating.textContent = rates[i].textContent.trim(); // Setting the rating based on the selected rate button
    userError.style.display = "none"; // Hiding the user error message
  });
}