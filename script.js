console.log("hello")

//getting a random hoice from the computer
let choices = ["Rock","Paper","Scissors"]
const getcomputerChoice = function(){
    let choice = choices[Math.ceil(Math.random()* choices.length - 1)]
    console.log(choice)
    return choice
}


const checkWinner = function(playerselection, computerSelection){
    if (playerselection == computerSelection){
        return "tie";
    }
    else if(
        (playerselection === "Rock" && computerSelection === "Scissors")||
        (playerselection === "Scissors" && computerSelection === "Paper") || 
        (playerselection === "Paper" && computerSelection === "Rock")
        ){
            return "Player";
        }
        else{
            return "Computer"
        }
}

const playRound = function(playerselection,computerSelection){
    const result = checkWinner(playerselection, computerSelection)
     if(result == "tie"){
        return "its a tie"
     }else if(result == "Player"){
        return `Player wins, ${playerselection} beats ${computerSelection}`
     }else{
        return `Computer wins, ${computerSelection} beats ${playerselection}`
     }
}

// playerselection = "Rock"
// computerSelection = getcomputerChoice()

// console.log(playRound(playerselection,computerSelection))


const game = function(){
    for (let i = 0;i < 5;i++){
         console.log("starting game ...")
         const playerselection = "Rock";
         const computerSelection = getcomputerChoice();
         console.log(playRound(playerselection,computerSelection))

    }
}

game()