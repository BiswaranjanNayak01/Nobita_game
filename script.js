let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg-container-id");
const userScorePara = document.getElementById("user_score");
const compScorePara = document.getElementById("computer_score");

const genCompChoice = () => {
  const options = ["red", "yellow", "pink"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};
function drawGame() {
  msg.innerText = "Game is draw, play again";
  msg.style.background = "green";
  console.log("Game is draw");
}
const showWinner = (winner, userChoice, CompChoice) => {
  if (winner) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you won the game");
    msg.innerText = "you win !! " + userChoice + " beats " + CompChoice;
    msg.style.background = "yellow";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("computer win the game");
    msg.innerText = "you lose !!" + CompChoice + " beats " + userChoice;
    msg.style.background = "red";
  }
};
const playGame = (userChoice) => {
  console.log("choice was clicked !!!-->", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice ==> ", compChoice);
  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "red") {
      userWin = compChoice === "yellow" ? false : true;
    } else if (userChoice === "yellow") {
      userWin = compChoice === "pink" ? false : true;
    } else {
      userWin = compChoice === "red" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked !!!-->",userChoice);
    playGame(userChoice);
  });
});
