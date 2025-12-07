{
    const rock = "kamień",
        paper = "papier",
        scissors = "nożyce";

    const playGame = function (playerInput) {
        clearMessages();

        const getMoveName = function (argMoveId) {
            const movedRockId = '1',
                movedPaperId = '2',
                movedScissorsId = '3';
            if (argMoveId == movedRockId) {
                return rock;
            } else if (argMoveId == movedPaperId) {
                return paper;
            } else if (argMoveId == movedScissorsId) {
                return scissors;
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const displayResult = function (argComputerMove, argPlayerMove) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if (argComputerMove == rock && argPlayerMove == paper) {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == paper && argPlayerMove == scissors) {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == scissors && argPlayerMove == rock) {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('Remis!');
            } else if (argPlayerMove == 'nieznany ruch') {
                printMessage('Nieprawidłowy ruch!');
            } else {
                printMessage('Tym razem przegrywasz :(');
            }
        }

//computer move:
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);

//player move:
        const playerMove = getMoveName(playerInput);

//display result:
        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame('1')
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame('2')
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame('3')
    });
}