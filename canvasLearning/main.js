
const can=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

// ctx.beginPath()
// ctx.rect(23,32,60,34)
// ctx.fillStyle="red";
// ctx.fill()

// ctx.beginPath()
// ctx.rect(57,45,800,67)
// ctx.fillStyle="blue"
// ctx.fill()


// ctx.beginPath()
// ctx.arc(60,150,50,0,2*Math.PI)
// ctx.strokeStyle="gray"
// ctx.stroke()



// ctx.beginPath()
// ctx.moveTo(0,0)
// ctx.lineTo(130,130)
// ctx.strokeStyle="black"
// ctx.stroke()


// ctx.beginPath()
// ctx.moveTo(90,0)
// ctx.lineTo(0,90)
// ctx.stroke()

const box={
    x:100,
    y:30,
    width:100,
    height:200
}


const box1={
    x:123,
    y:230,
    width:50,
    height:50
}


ctx.beginPath()
ctx.rect(box.x,box.y,box.width,box.height)
ctx.fillStyle="black"
ctx.fill()


ctx.beginPath()
ctx.rect(box1.x,box1.y,box1.width,box1.height)
ctx.fill()


ctx.beginPath()
ctx.arc(150,60,14,0,2*Math.PI)
ctx.fillStyle="red"
ctx.fill()

ctx.beginPath()
ctx.arc(150,120,14,0,2*Math.PI)
ctx.fillStyle="green"
ctx.fill()

ctx.beginPath()
ctx.arc(150,180,14,0,2*Math.PI)
ctx.fillStyle="yellow"
ctx.fill()


class Box{
    constructor(x,y,color){
        this.x=x,
        this.y=y,
        this.width=20,
        this.height=20
        this.color=color
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.width,this.height)
        ctx.fillStyle=this.color
        ctx.fill()

    }
}
const boxes=[]

for(let i=0;i<1000;i++){
    const  baseColors = ["red", "yellow", "white", "gray", "green", "blue", "orange", "pink", "purple", "cyan", "lime", "brown"]
    const x=Math.floor(Math.random()*300)
    const y=Math.floor(Math.random()*300)
    const cl=Math.floor(Math.random()*(baseColors.length))
    boxes.push(new Box(x,y,cl))
    
}
for(let i=0;i<boxes.length;i++){
    boxes[i].draw()
}


// boxes.push(new Box(20,30))
// boxes.push(new Box(234,456))

console.log(boxes)