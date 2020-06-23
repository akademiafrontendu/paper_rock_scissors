const game = () => {
    let winner = document.getElementById("winner");
    let allChoose = document.querySelectorAll(".btn");
    let scoretUserDisplay = document.getElementById("scoreUser");
    let scoretComputerDisplay = document.getElementById("scoreComputer");
    let resultUser = document.getElementById("result-user");
    let resultComputer = document.getElementById("result-computer");
    let sectionResult = document.getElementById("result");
    let time = 3;
    let computerChoosed = '';
    let userChoosed = ''
    let scoreUser = 0;
    let scoreComputer = 0;

    const StartGame = () => {
        allChoose.forEach((user) =>
            user.addEventListener("click", () => {
                preperToStartGame(user);
                let timeInterval = setInterval(() => {
                    if (time == 0) {
                        clearInterval(timeInterval);
                        computer = Math.floor(Math.random() * 3);
                        displayUserAndComputer(user.id, allChoose[computer].id);
                        checkWin(user.id, allChoose[computer].id)
                        sectionResult.classList.add("result");
                    } else {
                        winner.textContent = time;
                        time--;
                    }
                }, 800);
            })
        );
    };

    const displayUserAndComputer = (user, computer) => {
        resultUser.classList.remove("fa-hand-" + userChoosed);
        resultComputer.classList.remove("fa-hand-" + computerChoosed);
        resultUser.classList.add("fa-hand-" + user);
        resultComputer.classList.add("fa-hand-" + computer);
        userChoosed = user;
        computerChoosed = computer;
    };

    const preperToStartGame = (user) => {
        allChoose.forEach((val) => val.classList.remove("red"));
        time = 3;
        winner.textContent = time;

        user.classList.add("red");
        sectionResult.classList.remove("result");
    };

    const checkWin = ((user, computer) => {
        console.log(computer + "  " + user)
        if (user === computer) {
            winner.textContent = "Draw"
            return;
        }
        if (user === "rock") {
            if (computer === "scissors") {
                winner.textContent = "Player Wins"
                scoreUser++;
                scoretUserDisplay.textContent = scoreUser;
                return;
            } else {
                winner.textContent = "Computer Wins"
                scoreComputer++;
                scoretComputerDisplay.textContent = scoreComputer;
                return;
            }
        }
        if (user === "paper") {
            if (computer === "scissors") {
                winner.textContent = "Computer Wins"
                scoreComputer++;
                scoretComputerDisplay.textContent = scoreComputer;
                return;
            } else {
                winner.textContent = "Player Wins"
                scoreUser++;
                scoretUserDisplay.textContent = scoreUser;
                return;
            }
        }
        if (user === "scissors") {
            if (computer === "rock") {
                winner.textContent = "Computer Wins"
                scoreComputer++;
                scoretComputerDisplay.textContent = scoreComputer;
                return;
            } else {
                winner.textContent = "Player Wins"
                scoreUser++;
                scoretUserDisplay.textContent = scoreUser;
                return;
            }
        }
    });

    StartGame();
};
game();