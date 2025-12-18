class CircleBounce{
    constructor(x,y,size,speed,ctx){
        this.x=x
        this.y=y
        this.size=size 
        this.speed=speed
        this.ctx=ctx
    }
    move(){
        while(this.y+this.size<=400){
            this.y+=this.speed
        }
    }
    create(){
        this.ctx.beginPath()
        this.ctx.arc(this.x-this.size,this.y-this.size,this.size,0,2*Math.PI)
        this.ctx.fillStyle="red"
        this.ctx.fill()
        this.move()
        requestAnimationFrame(create)

    }
}
export default CircleBounce