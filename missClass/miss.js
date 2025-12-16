import Box from "./box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const boxes = []
for(let i=0;i<50;i++){
    let x= Math.floor(Math.random() * 500)
    let y = Math.floor(Math.random() * 500)
    let r = Math.floor(Math.random() * 256)
    let g= Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color  = `rgb(${r},${g},${b})`
    boxes.push(new Box(ctx,x,y,color));
    
}
function  gameloop(){
    requestAnimationFrame(gameloop)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<50;i++){

        boxes[i].update();
        boxes[i].draw();
        
    }
}
gameloop();