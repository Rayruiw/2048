document.addEventListener("DOMContentLoaded", function () {
  // 获取模态窗口和游戏容器的引用
  const modal = document.getElementById("startModal");
  const gameContainer = document.getElementById("gameContainer");
  const startButton = document.getElementById("startGameButton");
  const startSound = document.getElementById("start-sound");

  // 点击开始游戏按钮后，显示游戏界面，隐藏模态窗口
  startButton.addEventListener("click", function () {
    modal.style.display = "none"; // 隐藏模态窗口
    startSound.play()
    gameContainer.style.display = "block"; // 显示游戏界面
    startGame(); // 调用游戏的启动逻辑
  });
});

function startGame() {
  // 游戏启动逻辑
  window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  });
}