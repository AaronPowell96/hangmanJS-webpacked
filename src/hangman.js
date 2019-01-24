class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split("");
    this.guessedLetters = [];
    this.guesses = guesses;
    this.status = "playing";
    console.log(this.status);
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach(letter => {
      this.guessedLetters.includes(letter) || letter === " "
        ? (puzzle += letter)
        : (puzzle += "*");
    });
    return puzzle;
  }
  get message() {
    if (this.status === "playing") {
      return `Guesses Left: ${this.guesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return `Great work! You guessed the word!`;
    }
  }
  guess(guess) {
    if (this.status === "playing") {
      guess = guess.toLowerCase();
      const isUnique = !this.guessedLetters.includes(guess);
      const isBadGuess = !this.word.includes(guess);
      if (isUnique) {
        this.guessedLetters.push(guess);
      }
      if (isUnique && isBadGuess) {
        this.guesses--;
      }
      this.calculateStatus();
      console.log(this.status);
    }
  }
  calculateStatus() {
    const finished = this.puzzle === this.word.join("");
    if (this.guesses <= 0) this.status = "failed";
    else if (finished) this.status = "finished";
    else this.status = "playing";
  }
}
