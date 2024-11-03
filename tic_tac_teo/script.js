const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];
    
    const render = () => {
        let boardHTML = "";
        board.forEach((value,index) => {
            boardHTML +=`<div class="square" id="square-${index}">${value}</div>`;
        });
        document.querySelector(".gameboard").innerHTML = boardHTML;

        // Add event listeners to each square
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, index) => {
            square.addEventListener("click", () => {
                Game.handleClick(index);
            });
        });
    };

    const updateClick = (index, value) => {
        if (!board[index]) {
            board[index] = value;
            render(); 
        }
    };
    const getBoard = () => board;
    const resetBoard = () => board = ["", "", "", "", "", "", "", "", ""];
    return {
        render,
        updateClick,
        getBoard,
        resetBoard
    };
})();


function createPlayer(name, marker) {
    return {
        name,
        marker
    };
}

const Game = (() => {
    let player = [];
    let playerIndex;
    let gameOver;
    let win = [0,0];
    const winningCombinations = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal from top-left
        [2, 4, 6]  // diagonal from top-right
    ];
    const start = () => {
        player = [
            createPlayer(document.querySelector("#first-player").value, "X"),
            createPlayer(document.querySelector("#second-player").value, "O")
        ]
        playerIndex = 0;
        gameOver = false;
        gameBoard.render();
    }
    const handleClick = (index) => {
        if (!gameOver ) {
            gameBoard.updateClick(index, player[playerIndex].marker);
            if (checkWin(player[playerIndex].marker)) {
                win[playerIndex]++;
                const message = document.querySelector("#message");
                const parag = document.createElement("h3");
                parag.textContent = `${player[playerIndex].name} win!`;
                const result = document.querySelector("#result-display");
                const resultParag = document.createElement("p");
                resultParag.textContent = `${player[0].name} ${win[0]} - ${win[1]} ${player[1].name}`;
                message.appendChild(parag);
                result.appendChild(resultParag);
                gameOver = true;
                return;
            }
            playerIndex = playerIndex === 0 ? 1 : 0;
        }
    };

    const checkWin = (marker) => {
        const board = gameBoard.getBoard();
        return winningCombinations.some(combination => 
            combination.every(index => board[index] === marker)
        );
    };
    const restart = ()=>{
        const message = document.querySelector("#message");
        message.innerHTML = '';
        const result = document.querySelector("#result-display");
        result.innerHTML = '';
        gameBoard.resetBoard();
        player = [
            createPlayer(document.querySelector("#first-player").value, "X"),
            createPlayer(document.querySelector("#second-player").value, "O")
        ]
        playerIndex = 0;
        gameOver = false;
        gameBoard.render();
    };

    return {
        start,
        handleClick,
        restart,
    }
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
});

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    Game.restart();
});






// const cell = document.querySelectorAll(".cell")

