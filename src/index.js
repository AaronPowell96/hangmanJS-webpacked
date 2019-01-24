import Hangman from "./hangman"
import getPuzzle from "./requests"

let game1;
const guessesEl = document.querySelector("#guesses");
const puzzleEl = document.querySelector("#puzzle");

// puzzleEl.textContent = `Word: ${game1.puzzle}`;
// guessesEl.textContent = game1.message;
window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.guess(guess);
  render();
});
const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.message;

  let puzzleArr = game1.puzzle.split("");
  puzzleArr.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    puzzleEl.appendChild(span);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

startGame();

document.querySelector("#reset").addEventListener("click", function () {
  startGame();
});
