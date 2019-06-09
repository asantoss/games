var content = document.getElementById('content');

var ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var currentTurn = "O";




function play(x,y) {
    let row = x;
    let col = y;
    if (ticTacToe[row][col] == "") {
        updateCells(row, col, currentTurn)
        currentTurn == "O" ? currentTurn = "X" : currentTurn = "O";
    }
    if (winningCondition(ticTacToe)) {
        return content.innerHTML = `<div class="container align-items-center text-center">
        <h2 >The winner is ${winningCondition(ticTacToe)}!</h2>
        <button onclick="resetGame()" class="btn btn-primary" style="width: 100px;" type="submit">Play again!</button>
        </div>`
    }
    return content.innerHTML = renderBoard(ticTacToe);
}


//Check if any of the winning conditions are met.
function winningCondition(board) {
    if (checkRow(0, "X") || checkRow(1, "X") || checkRow(2, "X") || checkCol(0, "X") || checkCol(1, "X") || checkCol(2, "X") || checkDiagonals("X")) {
        return "X"
    } else if (checkRow(0, "O") || checkRow(1, "O") || checkRow(2, "O") || checkCol(0, "O") || checkCol(1, "O") || checkCol(2, "O") || checkDiagonals("O")) {
        return "O"
    } else {
        return false
    }
    
}


//Functions to target individual cells in our 3x3 array.
function updateCells(row, col, turn) {
    ticTacToe[row][col] = turn
}

function getCell(row, column) {
return ticTacToe[row][column]
}
//Check all the cells in a row to see if they match up
function checkRow(row, player) {
    return ticTacToe[row].every(e => { return e == player });
}
//Check all the cells in a column to see if they match up.
function checkCol(col, player) {
    let columns = [ticTacToe[0][col], ticTacToe[1][col], ticTacToe[2][col]]
    return columns.every(e => { return e == player });
}
//Diagonal checks to see if they match up.
function checkDiagonals(player) {
    let diag = [ticTacToe[0][2]]
    return (getCell(0, 0) === player && getCell(1, 1) === player && getCell(2, 2) == player) ||
    (getCell(0, 2) === player && getCell(1, 1) === player && getCell(2, 0) == player);
}




//Render the board for the tic tac toe which is a 3x3 matrix that we can follow with
//Two nest for loops.
function renderBoard(game){
    let container =[];
    for (let i = 0; i < game.length; i++) {
        var row = game[i];
        container.push(`<div class="w-50 text-center justify-items-around">`)
        for (let j = 0; j < row.length; j++) {
            var cell = row[j];
            let cellHTML=`<button onclick="play(${i},${j})" class="mx-2 my-1" style="height: 30px;">${cell}</button>`
            container.push(cellHTML)
        }
        container.push(`</div>`)
    }
    return `<div class="container d-flex flex-column justify-content-start align-items-center" id="board">
    <h4 id="header">It's player ${currentTurn}'s turn!</h4>
    ${container.join('')}
    <button onclick="resetGame()" class="btn btn-primary" style="width: 100px;" type="submit">Reset</button>
    </div>
    `}
    
    //This function can wipe out the board and restart the game.
    function resetGame() {
        ticTacToe = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        return content.innerHTML = renderBoard(ticTacToe)
    }
    



content.innerHTML = renderBoard(ticTacToe);

