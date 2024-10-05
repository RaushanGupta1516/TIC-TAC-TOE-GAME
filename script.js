
let buttons = document.querySelectorAll(".btn");
let turnX = true;
let winnerMess = document.querySelector("#winMessage");
let newGamebtn = document.querySelector("#newgame");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnX) {
            btn.innerText = "X";
            turnX = false;
        } else {
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});


const allFull = () => {
    for (let btn of buttons) {
        if (btn.innerText === "") {
            return false;
        }
    }
    return true;
};


let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const checkWinner = () => {
    let winnerFound = false;

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            buttons[a].innerText !== "" &&
            buttons[a].innerText === buttons[b].innerText &&
            buttons[a].innerText === buttons[c].innerText
        ) {
            winnerMess.innerText = `CONGRATULATIONS! WINNER IS ${buttons[a].innerText}`;
            winnerFound = true;

            
            buttons.forEach((btn) => (btn.disabled = true));
            break;
        }
    }

    
    if (!winnerFound && allFull()) {
        winnerMess.innerText = "GAME IS A TIE!!!";
    }
};


newGamebtn.addEventListener("click", () => {
    turnX = true;
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
    winnerMess.innerText = "";
});


   
