//1. initialization
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')  //selecting all inputs - buttons
const reset = document.getElementById('reset')
// 3. generates random choice for computer
function getComputerChoice(){
    const random = ['rock', 'paper', 'scissors']
    return computerRandom = random[Math.floor(Math.random() * random.length)] 
    // console.log(computerRandom)
}
//5. disabling play buttons after score = 5
function stopPlay() {
    buttons.forEach(btn => {
        btn.disabled = true
    })
}
//4. Playing a single round and then adding a message for 5 rounds
function playRound(userSelection) {
      let computerSelection = getComputerChoice()
      let result = ''
      if(
           userSelection == 'rock' && computerSelection == 'scissors' ||
           userSelection == 'paper' && computerSelection == 'rock'    ||
           userSelection == 'scissors' && computerSelection == 'paper'
      ){
           playerScore += 1
           result = `You win as ${userSelection} beats ${computerSelection}}
                     \n Player Score: ${playerScore} & Computer Score:${computerScore}`
           if(playerScore == 5){
            result = `game over, you win! Reset to play agian.`
            stopPlay() 
           } 
        }
        else if( userSelection == computerSelection){
            result = `it's a tie as both selected ${userSelection}`
        }
        else{
            computerScore += 1
            result = `Computer win as ${computerSelection} beats ${userSelection}
                     \n Player Score: ${playerScore} & Computer Score: ${computerScore}`
            if(computerScore == 5){
                        result = `game over, computer wins! Reset to play agian.`
                        stopPlay() 
            } 
        }
        document.getElementById('result').innerText = result
        return      
}
// 2. capturing user input/selection
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        console.log(button.value)
        playRound(button.value)  //calling 'playRound' function
    
        })
    })    
//6. added a reset button
reset.addEventListener('click', () => {
    location.reload()
})