const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById("statusText");
const resetbtn = document.querySelector('.reset');
const winCondtions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();
function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    resetbtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("index");
    if (options[cellIndex] != "" || !running) {
        return;
    } else {
        updateCell(this, cellIndex);

        checkWinner();
    }
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundwon = false;

    for (let i = 0; i < winCondtions.length; i++) {
        const conditions = winCondtions[i];

        const cellA = options[conditions[0]];
        const cellB = options[conditions[1]];
        const cellC = options[conditions[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }

        if (cellA == cellB && cellB == cellC) {
            roundwon = true;
            break;
        }
    }

    if (roundwon) {
        statusText.textContent = `${currentPlayer}'s wins`;
        statusText.style.color = "blue";
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = "Draw!!";
        statusText.style.color = "red";
    } else {
        changePlayer();
    }

}
function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    statusText.style.color = "black";
    cells.forEach(cell => cell.textContent = "");
    running = true;
}