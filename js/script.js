// To update score of user and computer

var userScore = 0;
var compScore = 0;


var rockDiv = document.getElementById('rock');
var paperDiv = document.getElementById('paper');
var scissorDiv = document.getElementById('scissor');
var result = document.getElementById('getResult');


// When user clicks on rock

rockDiv.addEventListener('click', function (e) {
    var userChoice = e.target.parentNode.id;
    var compChoice = getComputerChoice();

    compare(userChoice, compChoice);
});


// When user clicks on paper

paperDiv.addEventListener('click', function (e) {
    var userChoice = e.target.parentNode.id;
    var compChoice = getComputerChoice();

    compare(userChoice, compChoice);
});


// When user clicks on scissor

scissorDiv.addEventListener('click', function (e) {
    var userChoice = e.target.parentNode.id;
    var compChoice = getComputerChoice();

    compare(userChoice, compChoice);

});


// computer choice randomly ..

function getComputerChoice() {
    var choices = [' rock', ' paper', ' scissor'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


// Comparing the userChoice and CompChoice ..

function compare(userChoice, compChoice) {
    var bothChoices = userChoice + compChoice;

    // Winning cases ..
    if (bothChoices === "rock scissor" || bothChoices === "scissor paper" || bothChoices === "paper rock") {
        userScore++;
        WON(userChoice, compChoice);

        // Losing cases ..
    } else if (bothChoices === "scissor rock" || bothChoices === "paper scissor" || bothChoices === "rock paper") {
        compScore++;
        LOSE(userChoice, compChoice);

        // else draw ..
    } else {
        DRAW(userChoice, compChoice);
    }
}


// When user wins ..

function WON(userChoice, compChoice) {
    var IncreaseUserScore = document.getElementById('user-score');
    IncreaseUserScore.innerHTML = userScore;

    var smallUserWord = "(user)".fontsize(3).fontcolor("green").sub();
    var smallCompWord = "(comp)".fontsize(3).fontcolor("red").sub();
    result.innerHTML = userChoice + smallUserWord + " beats " + compChoice + smallCompWord + " .YOU WIN !!! 🔥";

    // add some effect on winning the game 
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 500);
}


// When user lose ..

function LOSE(userChoice, compChoice) {
    var IncreaseCompScore = document.getElementById('computer-score');
    IncreaseCompScore.innerHTML = compScore;

    var smallUserWord = "(user)".fontsize(3).fontcolor("red").sub();
    var smallCompWord = "(comp)".fontsize(3).fontcolor("green").sub();

    result.innerHTML = userChoice + smallUserWord + " loses to " + compChoice + smallCompWord + " .YOU LOST !!! 💩";

    // add some effect on losing the game
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 500);
}


// When both are equal ..

function DRAW(userChoice, compChoice) {
    var smallUserWord = "(user)".fontsize(3).fontcolor("gray").sub();
    var smallCompWord = "(comp)".fontsize(3).fontcolor("gray").sub();

    result.innerHTML = userChoice + smallUserWord + " and " + compChoice + smallCompWord + " are equal. Game IS DRAW !!! 😋";

    // add some effect on draw game

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 500);
}


// restart game ..

function restartGame() {
    var restart = document.querySelector('.restartBtn');
    restart.onclick = function() {
        document.getElementById('computer-score').innerHTML = 0;
        document.getElementById('user-score').innerHTML = 0;
        result.innerHTML = "Paper cover rock. you win!";
    };
}

restartGame();