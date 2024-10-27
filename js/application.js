document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("startModal");
  const gameContainer = document.getElementById("gameContainer");
  const startButton = document.getElementById("startGameButton");
  const startSound = document.getElementById("start-sound");

  startButton.addEventListener("click", function () {
    modal.style.display = "none";
    startSound.play()
    gameContainer.style.display = "block";
    startGame(); 
  });
});

function startGame() {
  window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  });
}