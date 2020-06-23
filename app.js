const game = () => {
    let startBtn = document.getElementById('start');
    let timer = document.getElementById('timer');


    const StartGame = () => {
        startBtn.addEventListener("click", () => {
            let time = 3;
            let timeInterval = setInterval(() => {
                if (time == 0) {
                    clearInterval(timeInterval);
                    //losowanie
                } else {
                    timer.textContent = time;
                    time--;
                }
            }, 1000);
        });
    }
    StartGame();

}
game();