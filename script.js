console.log("hello")

//getting a random hoice from the computer
const computerChoice = function(){
    let choices = ["Rock","Paper","Scissors"]
    let choice = choices[Math.ceil(Math.random()* choices.length - 1)]
    console.log(choice)
    return choice
}


const round = function(playerselection = "Rock", computerSelection){
    computerSelection = computerChoice()
    
    if (playerselection === computerSelection){
        console.log("Its a tie")
    }else if (playerselection === "Rock" && computerSelection === "Scissors" || playerselection === "Scissors" && computerSelection === "Paper" || playerselection === "Paper" && computerSelection === "Rock" ){
        console.log("player wins")
    }else{
        console.log("computer wins")
    }

}

round()