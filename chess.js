// script.js

let selectedSquare = null;

document.querySelectorAll('.board span').forEach(square => {
    square.addEventListener('click', () => {
        // If no square is selected and this one has a piece, select it
        if (!selectedSquare && square.textContent.trim() !== "") {
            selectedSquare = square;
            square.classList.add('selected');
        }
        // If a square is selected and the player clicks the same square again
        else if (selectedSquare === square) {
            square.classList.remove('selected');
            selectedSquare = null;
        }
        // If a square is selected and this is a new square (destination)
        else if (selectedSquare) {
            square.textContent = selectedSquare.textContent;
            selectedSquare.textContent = "";
            selectedSquare.classList.remove('selected');
            selectedSquare = null;
        }
    });
}); 