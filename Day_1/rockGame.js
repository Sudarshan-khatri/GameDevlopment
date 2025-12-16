const prompt = require('prompt-sync')();

function gameLocker(){
    let player1Score=0
    let player2Score=0
    const player=["player1","player2"]
    console.log("==================================");
    console.log("ROCK PAPER SCISSORS GAME");
    console.log("==================================");
    console.log("1: View Rules");
    console.log("2: Start Game");
    console.log("3: Highest score");
    let opt=Number(prompt("Choose option:"))
    switch(opt){
        case 1:
            console.log("--------------------------------------------------");
            console.log("🎉 Tip: Keep it fair and have fun! 🎉");
            console.log("Rules:");
            console.log("- Rock beats Scissors");
            console.log("- Scissors beats Paper");
            console.log("- Paper beats Rock");
            console.log("- Same choice = Tie");
            console.log("--------------------------------------------------");
            break
        case 2:
            let turn=Math.floor(Math.random()*player.length)
            let data=["rock","paper","scissor"]
            let gameRound=10
            while(gameRound>=0){
                let player1Select=Math.floor(Math.random()*data.length)
                let player2Select=Math.floor(Math.random()*data.length)
                let player1=data[player1Select]
                let player2=data[player2Select]
                let plyr=player[turn]
                console.log(plyr)
                console.log(player1)
                console.log(player2)
                if(player1===player2){
                    console.log("It's too tie")
                }else if(plyr==="player1"){
                    if((player1==="rock" && player2==="paper") || (player1==="scissor" && player2==="paper") ||(player1==="scissor" && player2==="rock")){
                        player1Score++
                        console.log(`Player1Score:${player1Score}`)
                        console.log(`Player 1 win`)
                    }else{
                        player2Score++
                        console.log(`Player2Score:${player2Score}`)
                        console.log("Player 2 win")

                    }
                }else{
                    if((player2==="rock" && player1==="paper") || (player2==="scissor" && player1==="paper") ||(player2==="scissor" && player1==="rock")){
                        player2Score++
                        console.log(`Player2Score:${player2Score}`)
                        console.log(`Player 2 win !!!!`)
                    }else{
                        player1Score++
                        console.log(`Player1Score:${player1Score}`)
                        console.log(`player 1 win !!!!`)
                    }
                }
                gameRound--
            }
                

            //show the highest score
            let highestScore=Math.max(player1Score,player2Score)
            console.log(`\nHighest score:${highestScore}`)

            //show the player socre
            console.log("\n==================================");
            console.log("GAME OVER - FINAL RESULTS");
            console.log("==================================");
            console.log(`Player 1: ${player1Score} points`);
            console.log(`Player 2: ${player2Score} points`);

            if(player1Score > player2Score){
                    console.log("Player 1 wins")
                }else if(player2Score> player1Score){
                    console.log("Player 2 wins")
                }else{
                    console.log("It's a tie")
                }
            break
        default:
            console.log("Invalid option")
    }
}

gameLocker()