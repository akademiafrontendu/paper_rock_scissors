const game = () => {
  let startBtn = document.getElementById("start");
  let timer = document.getElementById("timer");
  let allChoose = document.querySelectorAll(".btn");
  let resultUser = document.getElementById("result-user");
  let resultComputer = document.getElementById("result-computer");
  let sectionResult = document.getElementById("result");
  let time = 3;

  const StartGame = () => {
    allChoose.forEach((user) =>
      user.addEventListener("click", () => {
        preperToStartGame(user);
        let timeInterval = setInterval(() => {
          if (time == 0) {
            clearInterval(timeInterval);
            let computer = Math.floor(Math.random() * 3);
            displayUserAndComputer(user, allChoose[computer]);
            sectionResult.classList.add("result");
          } else {
            timer.textContent = time;
            time--;
          }
        }, 1000);
      })
    );
  };

  const displayUserAndComputer = (user, computer) => {
    timer.classList.add("display-no");
    console.log("user " + user.id + " computer " + computer.id);
    resultUser.classList.add("fa-hand-" + user.id);
    resultComputer.classList.add("fa-hand-" + computer.id);
  };

  const preperToStartGame = (user) => {
    allChoose.forEach((val) => val.classList.remove("red"));
    time = 3;
    timer.textContent = time;
    timer.classList.remove("display-no");
    user.classList.add("red");
    sectionResult.classList.remove("result");
  };

  const checkWin = () => {};

  StartGame();
};
game();
