document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
      square.classList.add("square");
    });
    let currentPlayer = "X";
const gameState = Array(9).fill(null); 

document.querySelectorAll("#board div").forEach((square, index) => {
  square.addEventListener("click", () => {
    if (!gameState[index]) {  
      gameState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      currentPlayer = currentPlayer === "X" ? "O" : "X"; 
    }
  });
});

document.querySelectorAll("#board div").forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });
  
    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });
  
  function checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], /*Rows*/
      [0, 3, 6], [1, 4, 7], [2, 5, 8], /* Columns*/
      [0, 4, 8], [2, 4, 6]  /* Diagonals*/
    ];
  
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        const winner = gameState[a];
        document.getElementById("status").textContent = `Congratulations! ${winner} is the Winner!`;
        document.getElementById("status").classList.add("you-won");
        return;
      }
    }
  }
  
  document.querySelectorAll("#board div").forEach((square, index) => {
    square.addEventListener("click", () => {
      if (!gameState[index]) {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  
  document.querySelector(".btn").addEventListener("click", () => {
    gameState.fill(null);  // Clear game state
    document.querySelectorAll("#board div").forEach(square => {
      square.textContent = "";  // Clear text content
      square.classList.remove("X", "O");  
    });
    currentPlayer = "X";  
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
  });
  
  document.querySelectorAll("#board div").forEach((square, index) => {
    square.addEventListener("click", () => {
      if (!gameState[index]) {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  
  });
  