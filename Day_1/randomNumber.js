const readline=require("readline")

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let computerNum=Math.floor(Math.random()*100)
let turn=5;
function game(guess){
    console.log(computerNum)
    if(turn>0){
        if(guess===computerNum){
            console.log(`You win at turn ${turn}`)
        }else if(guess>computerNum){
            turn--;
            input.question("Go higher\nPlease guess:: ",game)
        }else if(guess<computerNum){
            turn--;
            input.question("Go lower\nPlease guess:: ",game)
        }
        else{
            console.log("You loose !!!!")
        }
    // input.close()
    }



}
input.question("Please guess:: ",game)
    
