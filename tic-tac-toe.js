document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  squares.forEach(square => {
    square.classList.add("square");
  });

  let currentPlayer = "X";
  const gameState = Array(9).fill(null); // Array to keep track of the state of the game
  
  document.querySelectorAll("#board div").forEach((square, index) => {
    square.addEventListener("click", () => {
      if (!gameState[index]) {  // Only allow move if square is empty
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
      }
    });
  });


});


