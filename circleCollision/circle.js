const can=document.getElementById("canvas")
const ctx=can.getContext("2d")
const spn=document.getElementById("sp")


class circleMove{
    constructor(x,y,pos){
        this.x=x
        this.y=y
        this.pos=pos

    }
    move(){
        let change_x=this.x-0
        let change_y=this.y-0
        let sum=change_x+change_y
        this.pos=Math.sqrt(sum)
        spn.textContext=this.pos
        console.log(this.pos)
        ctx.beginPath()
        ctx.arc(this.x,this.y,24,0,2*Math.PI)
        ctx.strokeStyle="red"
        ctx.stroke()
    }
}


const x_pos=Math.floor(Math.random()*400)
const y_pos=Math.floor(Math.random()*500)
const data=new circleMove(x_pos,y_pos)
data.move()
