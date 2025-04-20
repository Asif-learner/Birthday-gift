const messages = [
    "Wishing you a day filled with joy, laughter, and all the things you love.",
    "Thank you for being such an amazing person!",
    "You're a light in so many lives — keep shining!",
    "Hope this year brings you unforgettable adventures!",
    "Just know you're loved, appreciated, and celebrated!",
    "Happy Birthday! May all your dreams take flight. 🎉"
  ];
  
  let index = 0;
  
  const messageText = document.getElementById("message-text");
  const button = document.getElementById("show-more");
  
  button.addEventListener("click", () => {
    index = (index + 1) % messages.length; // loop back to start
    messageText.textContent = messages[index];
  });
const collageBtn = document.getElementById("show-collage");
const collage = document.getElementById("memory-collage");

collageBtn.addEventListener("click", () => {
  collage.classList.toggle("hidden");
  collageBtn.textContent = collage.classList.contains("hidden")
    ? "Show Memories"
    : "Hide Memories";
});
const cutCakeBtn = document.getElementById("cut-cake-button");

cutCakeBtn.addEventListener("click", () => {
  window.location.href = "page4.html"; // replace with your next page
});

  