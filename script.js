//When user clicks generate a random choice
//Display choices
//Show message about choices made by users
//Compare computer vs user choice
//Update the score

const result = document.getElementById("result");

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

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5);
    let comp_choice = choices[randomNumber];
    console.log(randomNumber);

    document.getElementById("userChoice").textContent = `Computer chose ${comp_choice.toUpperCase()}`; 
    document.getElementById("compChoice").textContent = `You chose ${input.toUpperCase()}`;
}