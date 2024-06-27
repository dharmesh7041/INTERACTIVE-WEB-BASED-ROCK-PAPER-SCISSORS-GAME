let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice ,compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win.  Your ${userChoice}  beats ${compChoice}!`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You win. ${compChoice}  beats your ${userChoice}!`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  // Genrate computer choice
  const compChoice = genCompChoice();
  

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else{
    let userWin = true;
    if (userChoice === "rock") {
      // scisoors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner (userWin, userChoice, compChoice);
  } 



};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})

// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");

// // for AI choice generator

// const genCompChoice = () => {
//     const options = ["rock","paper","scissors"];
//     const randIdx = Math.floor(Math.random() * 3);     //to generate random number for arry //
//     return options [randIdx];
// };

// const drawGame = () => {
//     console.log("game was draw.");
// }

// const showWinner = (userwin) => {
//     if(userwin) {
//         console.log("you win!");
//     } else {
//         console.log("youlose");
//     }  
// }

// // which choice are selected by  user

// const playGame = (userChoice) => {
//     console.log("user choice = ",userChoice);
//     // generate AI choice
//     const compChoice = genCompChoice();
//     console.log("compChoice = ",genCompChoice);

//     // draw game
//     if (userChoice === compChoice) {
//         drawGame();
//     } else {
//         let userwin = true;
//         if (userChoice === "rock"){
//             // scissor,paperse
//             userwin =compChoice === "paper" ? false : true;
//         } else if(userChoice === "paper") {
//             // rock,scissor
//             userwin = compChoice === "scissor" ? false : true;

//         }else {
//             // rock,paper
//             userwin = compChoice === "rocK" ? false : true;
//         }
//         showWinner(userwin);
//     }
// };    

// choices.forEach ((choice) => {
//     choice.addEventListener("click",() => {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });




