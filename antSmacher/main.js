import Ant from "./ant.js"

const canva=document.getElementById("canvas")
const ctx=canva.getContext("2d")
const sp=document.getElementById("sp")
// console.log(canva)

const ants=[]
for(let i=0;i<10;i++){
    const x=Math.random()*canva.width
    const y=Math.random()*canva.height
    ants.push(new Ant(x,y))
}

function gameLoop(){
    ctx.clearRect(0,0,canva.width,canva.height)

    for(let i=0;i<ants.length;i++){
        for(let j=i+1;j<ants.length;j++){
            const ant1=ants[i]
            const ant2=ants[j]
            if(ant1.right>ant2.left && ant1.left<ant2.right && ant1.top<ant2.bottom && ant1.bottom>ant2.top){
                ant1.directionX*=-1
                ant1.directionY*=-1
                ant2.directionX*=-1
                ant2.directionY*=-1
            }
        ants[i].draw(ctx)
        ants[i].update()
    }
}
   
    

   
    
  

    requestAnimationFrame(gameLoop)
}
gameLoop()