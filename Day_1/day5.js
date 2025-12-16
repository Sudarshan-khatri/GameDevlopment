const data=["rock","paper","scissor"]


const MAX=3
let rScore=0
let pSCore=0
let sScore=0


for(let i=0;i<data.length;i++){
    let index=Math.floor(Math.random()*MAX)
    if(data[index]==="rock"){
        rScore++
        console.log(data[index])
    }else if(data[index]==="paper"){
        pSCore++
        console.log(data[index])
    }else{
        sScore++
        console.log(data[index])
    }
}
console.log(`Rock score::${rScore}`)
console.log(`Paper score::${pSCore}`)
console.log(`Scissor socre::${sScore}`)



const MIN=5
const Max=500


function randomValue(){
    let x=Math.floor(Math.random()*Max)
    let y=Math.floor(Math.random()*((Max-MIN)+MIN))
    return [x,y]

}
console.log(randomValue())