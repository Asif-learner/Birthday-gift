const button = document.getElementById("blow-candles");
const flames = document.querySelectorAll(".flame");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  // Blow out candles
  flames.forEach(flame => flame.style.display = "none");

  // Show final birthday message
  message.classList.add("show");

  // Add sparkles
  for (let i = 0; i < 30; i++) {
    createSparkle();
  }
});

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
}
