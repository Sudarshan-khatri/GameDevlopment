const readline=require('readline')

const guess=["p","s","r"]
let index=Math.floor(Math.random()*guess.length)
let computer=guess[index]
console.log(`Computer guess::${computer}`)

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function hello(greet){
    
    let answer=greet
    if(answer===computer){
        console.log("It's tie")
    }
    else if(answer==="r" && computer==="p"){
        console.log("You win")
    }else if(answer==="s" && computer==="p"){
        console.log("you win ")
    }else if(answer==="s" && computer==="r"){
        console.log("You win")
    }else{
        console.log("You loose")
    }
    input.close()

}

input.question("choose s|p|r:\t",hello) 