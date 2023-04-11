//When user clicks generate a random choice
//Display choices
//Show message about choices made by users
//Compare computer vs user choice
//Update the score

const result = document.getElementById("result");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const mainPart = document.getElementById("main-game");
const mainButton = document.getElementById("btn");

let [comp_score, user_score] = [0,0];

let gameRules = {
    Rock: {
        Rock: 'tie',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Scissors: {
        Scissors: 'tie',
        Rock: 'win',
        Paper: 'lose',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'tie',
        Rock: 'lose',
        Scissors: 'win',
        Spock: 'lose',
        Lizard: 'win'
    },
    Spock: {
        Rock: 'lose',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'tie',
        Lizard: 'win'
    },
    Lizard: {
        Rock: 'win',
        Scissors: 'win',
        Paper: 'lose',
        Spock: 'lose',
        Lizard: 'tie'
    }
}


function winCondition() {
    if(user_score === 5) {
        alert('GAME OVER - YOU WON!! You are the best, CONGRATULATIONS!!!');
        mainPart.style.pointerEvents = 'none';
    } else if(comp_score === 5) {
        alert('GAME OVER - Computer Wins, Maybe next time human!!!');
        mainPart.style.pointerEvents = 'none';
    } 
 }

//When user clicks generate a random choice
function clicked(user) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let comp_choice = choices[randomNumber];
    //Display choices
    userChoice.textContent = `Computer chose ${comp_choice.toUpperCase()}`; 
    userChoice.style.fontWeight = "900";
    compChoice.textContent = `You chose ${user.toUpperCase()}`;
    compChoice.style.fontWeight = "900";
    //Compare computer vs user choice
    switch(gameRules[comp_choice][user]) {
        case 'win':
            result.textContent = 'You win';
            result.style.cssText = "background-color: rgb(185, 249, 185)";
            user_score++;
            break;
        case 'lose':
            result.textContent = 'You lose';
            result.style.cssText = "background-color: rgb(249, 185, 196)";
            comp_score++;
            break;
        case 'tie':
            result.textContent = 'It is a Tie';
            result.style.cssText = "background-color: rgb(210, 216, 249)";
            break;
        }
        winCondition();
        localStorage.setItem('userInputValue', JSON.stringify(user_score));
        localStorage.setItem('compInputValue', JSON.stringify(comp_score));
        setLocalStorageData();

}


//  local storage and updating score
//Update the score
const setLocalStorageData = () => {
    document.getElementById('comp_score').textContent = localStorage.getItem('compInputValue');
    document.getElementById('user_score').textContent = localStorage.getItem('userInputValue'); 
  } 
//   setLocalStorageData(); 


  function refreshPage() {
    window.location.reload();
 }

 
