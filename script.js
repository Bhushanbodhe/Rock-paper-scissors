const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-Display");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];

function Game(playerchoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerchoice, computerChoice) =>
        playerchoice === computerChoice
            ? "IT'S A TIE!!"
            : (playerchoice === "Rock" && computerChoice === "Scissors") ||
              (playerchoice === "Paper" && computerChoice === "Rock") ||
              (playerchoice === "Scissors" && computerChoice === "Paper")
            ? "YOU WIN !!"
            : "YOU LOSE !!";

    const result = getResult(playerchoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerchoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.style.backgroundColor =
        result === "IT'S A TIE!!"
            ? "blue"
            : result === "YOU WIN !!"
            ? "green"
            : "red";
    resultDisplay.style.border = "2px solid red";
    resultDisplay.style.color = "white";
}
