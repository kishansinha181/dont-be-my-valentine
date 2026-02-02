let messageIndex = 0;

const messages = [
  "Nope 😏",
  "Missed me!",
  "Too slow 🏃‍♀️",
  "Try harder 😈",
  "Just say YES ❤️"
];

const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

function moveNoButton() {
  const container = document.querySelector(".container");

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);

function handleYesClick() {
  window.location.href = "yes.html";
}
