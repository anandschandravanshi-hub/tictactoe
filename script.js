let turn = "X";
let gameOver = false;
let vsComputer = true;
let xScore = 0;
let oScore = 0;
let drawScore = 0;
let clickSound = new Audio("sounds/click.mp3");
let winSound = new Audio("sounds/win.mp3");
let drawSound = new Audio("sounds/draw.mp3");
const wins = [

    [1,2,3],
    [4,5,6],
    [7,8,9],

    [1,4,7],
    [2,5,8],
    [3,6,9],

    [1,5,9],
    [3,5,7]

];
function play(box) {

    if (gameOver) return;

    if (box.innerHTML == "") {

        box.innerHTML = turn;

        box.style.animation = "none";
        box.offsetHeight;
        box.style.animation = "pop .25s";

        clickSound.currentTime = 0;
        clickSound.play();

        checkWinner();

        if (!gameOver) {

            if (turn == "X") {
                turn = "O";
            } else {
                turn = "X";
            }

            document.getElementById("turn").innerHTML =
            "Current Turn : " + turn;

            // 👇 Ye 4 lines add karo
            if (vsComputer && turn == "O") {
                setTimeout(computerMove, 500);
            }
        }
    }
}

function checkWinner() {

    let b1 = document.getElementById("b1").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let b4 = document.getElementById("b4").innerHTML;
    let b5 = document.getElementById("b5").innerHTML;
    let b6 = document.getElementById("b6").innerHTML;
    let b7 = document.getElementById("b7").innerHTML;
    let b8 = document.getElementById("b8").innerHTML;
    let b9 = document.getElementById("b9").innerHTML;

    // X Wins

    if (b1=="X" && b2=="X" && b3=="X") {
    gameOver = true;
    xScore++;
    updateScore();
    highlight("b1","b2","b3");

    showWinLine("185px","45px","330px",0);

    winSound.currentTime = 0;
    winSound.play();

    setTimeout(restartGame, 1500)
 

return;
}

    if (b4=="X" && b5=="X" && b6=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b4","b5","b6");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
    
        return;
}

    if (b7=="X" && b8=="X" && b9=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b7","b8","b9"); 
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b1=="X" && b4=="X" && b7=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b1","b4","b7");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b2=="X" && b5=="X" && b8=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b2","b5","b8");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b3=="X" && b6=="X" && b9=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b3","b6","b9");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b1=="X" && b5=="X" && b9=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b1","b5","b9");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b3=="X" && b5=="X" && b7=="X") {
        gameOver = true;
        xScore++;
        updateScore();
        highlight("b3","b5","b7");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }
        // O Wins

    if (b1=="O" && b2=="O" && b3=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b1","b2","b3");
        showWinLine("185px","45px","330px",0);
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b4=="O" && b5=="O" && b6=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b4","b5","b6");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b7=="O" && b8=="O" && b9=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b7","b8","b9");
        winSound.currentTime = 0;
        winSound.play();
       setTimeout(restartGame, 1500)
        return;
    }

    if (b1=="O" && b4=="O" && b7=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b1","b4","b7");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500);
        return;
    }

    if (b2=="O" && b5=="O" && b8=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b2","b5","b8");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b3=="O" && b6=="O" && b9=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b3","b6","b9");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500)
        return;
    }

    if (b1=="O" && b5=="O" && b9=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b1","b5","b9");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500);
        return;
    }

    if (b3=="O" && b5=="O" && b7=="O") {
        gameOver = true;
        oScore++;
        updateScore();
        highlight("b3","b5","b7");
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(restartGame, 1500);
        return;
    }

    // Draw

    if (
    b1 != "" &&
    b2 != "" &&
    b3 != "" &&
    b4 != "" &&
    b5 != "" &&
    b6 != "" &&
    b7 != "" &&
    b8 != "" &&
    b9 != ""
) {
    gameOver = true;
    drawScore++;
    updateScore();

    drawSound.currentTime = 0;
    drawSound.play();

    setTimeout(restartGame, 1500)
}
}
function highlight(a, b, c) {
    document.getElementById(a).classList.add("win");
    document.getElementById(b).classList.add("win");
    document.getElementById(c).classList.add("win");
}
function showWinLine(top, left, width, rotate) {

    let line = document.getElementById("winLine");

    line.style.display = "block";
    line.style.top = top;
    line.style.left = left;
    line.style.width = width;
    line.style.transform = "rotate(" + rotate + "deg)";
}
function updateScore() {

    document.getElementById("score").innerHTML =
    "X Wins : " + xScore +
    " | O Wins : " + oScore +
    " | Draws : " + drawScore;

}
function restartGame() {

    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById("b" + i);
        cell.innerHTML = "";
        cell.classList.remove("win");
    }

    turn = "X";
    gameOver = false;

    document.getElementById("turn").innerHTML = "Current Turn : X";
    document.getElementById("winLine").style.display = "none";
}
function startTwoPlayer() {

    vsComputer = false;

    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

}

function startComputer(level) {

    difficulty = level;
    vsComputer = true;

    document.getElementById("difficultyMenu").style.display = "none";
    document.getElementById("game").style.display = "block";

}
function computerMove() {

    if (difficulty == "easy") {
        easyAI();
    }

    else if (difficulty == "moderate") {
        moderateAI();
    }

    else {
        impossibleAI();
    }

}
function easyAI() {

    let empty = [];

    for (let i = 1; i <= 9; i++) {

        let cell = document.getElementById("b" + i);

        if (cell.innerHTML == "") {
            empty.push(cell);
        }

    }

    if (empty.length == 0) return;

    let random = Math.floor(Math.random() * empty.length);

    play(empty[random]);

}
function cornerMove() {

    let corners = [1, 3, 7, 9];

    let empty = [];

    for (let i of corners) {

        if (getBox(i).innerHTML == "") {
            empty.push(getBox(i));
        }

    }

    if (empty.length == 0) return null;

    let random = Math.floor(Math.random() * empty.length);

    return empty[random];

}
function oppositeCornerMove() {

    if (getBox(1).innerHTML == "X" && getBox(9).innerHTML == "") {
        return getBox(9);
    }

    if (getBox(9).innerHTML == "X" && getBox(1).innerHTML == "") {
        return getBox(1);
    }

    if (getBox(3).innerHTML == "X" && getBox(7).innerHTML == "") {
        return getBox(7);
    }

    if (getBox(7).innerHTML == "X" && getBox(3).innerHTML == "") {
        return getBox(3);
    }

    return null;

}
function getBox(n) {

    return document.getElementById("b" + n);

}
function getBoard() {

    let board = [];

    for (let i = 1; i <= 9; i++) {
        board.push(getBox(i).innerHTML);
    }

    return board;

}

function emptyCells(board) {

    let cells = [];

    for (let i = 0; i < board.length; i++) {

        if (board[i] == "") {
            cells.push(i);
        }

    }

    return cells;

}
function checkWinnerBoard(board, player) {

    return (

        (board[0] == player && board[1] == player && board[2] == player) ||

        (board[3] == player && board[4] == player && board[5] == player) ||

        (board[6] == player && board[7] == player && board[8] == player) ||

        (board[0] == player && board[3] == player && board[6] == player) ||

        (board[1] == player && board[4] == player && board[7] == player) ||

        (board[2] == player && board[5] == player && board[8] == player) ||

        (board[0] == player && board[4] == player && board[8] == player) ||

        (board[2] == player && board[4] == player && board[6] == player)

    );

}
function evaluate(board) {

    if (checkWinnerBoard(board, "O")) {
        return 10;
    }

    if (checkWinnerBoard(board, "X")) {
        return -10;
    }

    return 0;

}
function getWinner(board) {

    if (checkWinnerBoard(board, "X")) return "X";

    if (checkWinnerBoard(board, "O")) return "O";

    if (emptyCells(board).length == 0) return "Draw";

    return null;

}
function minimax(board, isMaximizing) {

    let score = evaluate(board);

    if (score == 10) return score;

    if (score == -10) return score;

    if (emptyCells(board).length == 0) return 0;
    
    if (isMaximizing) {

    let best = -1000;

    for (let index of emptyCells(board)) {

        board[index] = "O";

        best = Math.max(best, minimax(board, false));

        board[index] = "";

    }

    return best;

}
    else {

    let best = 1000;

    for (let index of emptyCells(board)) {

        board[index] = "X";

        best = Math.min(best, minimax(board, true));

        board[index] = "";

    }

    return best;

}
}
function findBestMove() {

    let board = getBoard();

    let bestScore = -1000;
    let bestMoves = [];

    for (let index of emptyCells(board)) {

        board[index] = "O";

        let score = minimax(board, false);

        board[index] = "";

        if (score > bestScore) {

            bestScore = score;
            bestMoves = [index];

        }

        else if (score == bestScore) {

            bestMoves.push(index);

        }

    }

    let random = Math.floor(Math.random() * bestMoves.length);

    return bestMoves[random];

}
function blockMove() {

    for (let combo of wins) {

        let a = getBox(combo[0]);
        let b = getBox(combo[1]);
        let c = getBox(combo[2]);

        let values = [
            a.innerHTML,
            b.innerHTML,
            c.innerHTML
        ];

        let xCount = values.filter(v => v == "X").length;
        let emptyCount = values.filter(v => v == "").length;

        if (xCount == 2 && emptyCount == 1) {

            if (a.innerHTML == "") return a;
            if (b.innerHTML == "") return b;
            if (c.innerHTML == "") return c;

        }

    }

    return null;

}
function winningMove() {

    for (let combo of wins) {

        let a = getBox(combo[0]);
        let b = getBox(combo[1]);
        let c = getBox(combo[2]);

        let values = [
            a.innerHTML,
            b.innerHTML,
            c.innerHTML
        ];

        let oCount = values.filter(v => v == "O").length;
        let emptyCount = values.filter(v => v == "").length;

        if (oCount == 2 && emptyCount == 1) {

            if (a.innerHTML == "") return a;
            if (b.innerHTML == "") return b;
            if (c.innerHTML == "") return c;

        }

    }

    return null;

}
function moderateAI() {

    let move = winningMove();

    if (move) {
        play(move);
        return;
    }

    move = blockMove();

    if (move) {
        play(move);
        return;
    }

    easyAI();

}
function impossibleAI() {

    let bestMove = findBestMove();

    if (bestMove != null) {
        play(getBox(bestMove + 1));
    }

}
function goToMenu() {

    restartGame();

    xScore = 0;
    oScore = 0;
    drawScore = 0;

    updateScore();

    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";

}
function showDifficulty() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("difficultyMenu").style.display = "block";
    document.getElementById("game").style.display = "none";

}

function backToMenu() {

    document.getElementById("difficultyMenu").style.display = "none";
    document.getElementById("menu").style.display = "block";

}
function backToDifficulty() {

    restartGame();

    document.getElementById("game").style.display = "none";
    document.getElementById("difficultyMenu").style.display = "block";

}