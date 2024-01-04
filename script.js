console.log("hello")

//getting a random hoice from the computer
const computerChoice = function(){
    let choices = ["Rock","Paper","Scissors"]
    let choice = choices[Math.ceil(Math.random()* choices.length - 1)]
    console.log(choice)
}
computerChoice()