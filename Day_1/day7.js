const readline=require("readline")
const input =readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function ask(answer){
    console.log("hello good morning",answer)
    input.question("what is your name\n:",ask)
}
input.question("What is your name\n",ask)

