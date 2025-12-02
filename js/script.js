function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == '1') {
            return 'kamień';
        } else if (argMoveId == '2') {
            return 'papier';
        } else if (argMoveId == '3') {
            return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
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
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

//player move:
//     let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);

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