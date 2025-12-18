class CarSpeed{
    constructor(x,yspeed,direction,ctx){
        this.x=x
        this.y=y
        this.speed=speed
        this.direction={
            dx:1,
            dy:1
        }
        this.ctx=ctx
    }

    create(){
        this.ctx.beginPath()
        this.ctx.rect(20,150,100,40)
        this.ctx.fillStyle="gray"
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.arc(40,190,10,0,2*Math.PI)
        this.ctx.fillStyle="red"
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.arc(90,190,10,0,2*Math.PI)
        this.ctx.fillStyle="red"
        this.ctx.fill()



        this.ctx.beginPath()
        this.ctx.moveTo(120,120)
        this.ctx.lineTo(220,290)
        this.ctx.fillStyle="yellow"
        this.ctx.fill()
    }
}
export default CarSpeed