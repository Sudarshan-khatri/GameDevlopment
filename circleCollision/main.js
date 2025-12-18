import circleMove from "./circle.js"

const canva=document.getElementById("canvas")
const ctx=canva.getContext("2d")
const sp=document.getElementById("data")

// let direct={
//     x_axis:1,
//     y_axis:1
// }


let circle=new circleMove(20,20,20,5,sp,ctx)
function gameloop(){
    requestAnimationFrame(gameloop)
    ctx.clearRect(0,0,canva.width,canva.height)
    circle.move()
}
gameloop()
