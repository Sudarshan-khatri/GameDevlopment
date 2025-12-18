class circleMove{
    constructor(x,y,size,speed,sp,ctx){
        this.x=x
        this.y=y
        this.size=size
        this.speed=speed
        this.direction={
            x_axis:1,
            y_axis:1
        }
        this.sp=sp
        this.ctx=ctx
    }
    collide(){
        if(this.x+this.size>=410){
           this.direction.x_axis-=Math.floor(Math.random()*400)
           this.x=this.direction.x_axis
        }
        if(this.x-this.size<=0){
           this.direction.x_axis+=Math.floor(Math.random()*400)
           this.x=this.direction.x_axis
        }
        if(this.y+this.size>=510){
            this.direction.y_axis-=Math.floor(Math.random()*500)
            this.y=this.direction.y_axis
        }
        if(this.y-this.size<=0){
            this.direction.y_axis+=Math.floor(Math.random()*400)
            this.y=this.direction.y_axis
        }
    }
    move(){
        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        this.ctx.fillStyle="red"
        this.ctx.fill()


        this.ctx.beginPath()
        this.ctx.moveTo(0,0)
        this.ctx.lineTo(this.x,this.y)
        this.ctx.fillStyle="red"
        this.ctx.stroke()

        this.x+=this.speed
        this.y+=this.speed
        this.collide()

        let x1=this.x-0
        let y1=this.y-0
        let distance=Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2))
        console.log(distance)
        this.sp.textContent=`X:${this.x.toFixed(2)} and Y:${this.y.toFixed(2)} Distance:${distance.toFixed(2)}`
        console.log(sp.textContent)
    
        requestAnimationFrame(this.move)



        
    }
}
export default circleMove