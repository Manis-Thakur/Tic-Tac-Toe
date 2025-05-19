const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById("statusText");
const resetbtn = document.querySelector('.reset');
const winCondtions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    resetbtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;

}

