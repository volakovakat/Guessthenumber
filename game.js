function initGame() {
    let userInput = document.querySelector('.userInput');
    let submitButton = document.querySelector('.submitButton');
    let guessForm = document.querySelector('.guessForm');
    let randomNumber = getRandomNumber(0, 100);
    let message = document.querySelector('.message');
    let lowGuess = document.querySelector('.lowGuess');
    let highGuess = document.querySelector('.highGuess');
    let lowGuessNumber = 0;
    let highGuessNumber = 100;
    let guessCounter = 0;
    let startAgainButton = document.querySelector('.startAgainButton');
    let winNumber = document.querySelector('.winNumber');
    let alert = document.querySelector('.alert');


    function compareGuessedNumber(guessedNumber) {
        if ((guessedNumber >= highGuessNumber) || (guessedNumber <= lowGuessNumber)) {
        message.innerHTML = 'This is obviously wrong';
        alert.style.backgroundColor = 'grey';
        
        } else {
        guessCounter++;
        console.log('guess', guessCounter);
            if(randomNumber < guessedNumber) {
                message.innerHTML = 'Too high!';
                if(highGuessNumber > guessedNumber) {
                    highGuessNumber = guessedNumber;
                highGuess.innerHTML = highGuessNumber;
                alert.style.backgroundColor = 'red';
                }
            } else if(randomNumber > guessedNumber) {
                message.innerHTML = 'Too low!';
                if(lowGuessNumber < guessedNumber) {
                    lowGuessNumber = guessedNumber;
                lowGuess.innerHTML = lowGuessNumber;
                alert.style.backgroundColor = 'blue';
                }   
            } else if(randomNumber === guessedNumber) {
                message.innerHTML = 'You won! You guessed ' + guessCounter + ' times!';
                winNumber.innerHTML = guessedNumber;
                alert.style.backgroundColor = 'gold';
            } else {
                message.innerHTML = 'Invalid input';
            }
    }

        userInput.value = ''; //vyprázdní pole, kam se píše
        userInput.focus(); //vloží focus do políčka - kurzor zpátky do pole, kam se píše
    }

    function handleUserInput(event) {
        console.log('event', event);
        event.preventDefault()
        let userGuess = Number(userInput.value);
        console.log('user guessed', userGuess);
        compareGuessedNumber(userGuess);
    }
    
    function restartGame() {
        //document.location.reload();
        message.innerHTML = 'Guess!';
        highGuess.innerHTML = '100';
        lowGuess.innerHTML = '0';
        winNumber.innerHTML = '?';
        alert.style.backgroundColor = '#ec028c';

        submitButton.removeEventListener('click', handleUserInput);
        startAgainButton.removeEventListener('click', restartGame);
        guessForm.removeEventListener('submit', handleUserInput);
       

        initGame();
    }

    submitButton.addEventListener('click', handleUserInput)
    startAgainButton.addEventListener('click', restartGame);
    guessForm.addEventListener('submit', handleUserInput);
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', initGame);