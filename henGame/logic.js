class Egg{
    constructor(x,y,size,speed,ctx){
        this.x=x
        this.y=y
        this.size=size
        this.speed=speed
        this.ctx=ctx
        
    }
    collide(){
        if(this.x+this.size>=innerWidth || this.x-this.size<=0){
            this.speed-=this.speed
        }
        if(this.y+this.size>=innerHeight || this.y-this.size<=0){
            this.speed-=this.speed
        }
    }
    move(){

        this.ctx.clearRect(0,0,innerWidth,innerHeight)

        this.x+=this.speed
        this.y+=this.speed

        this.collide()


        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,20,0,2*Math.PI)
        this.ctx.fillStyle="green"
        this.ctx.fill()
        requestAnimationFrame(move)
    }
}

export default Egg