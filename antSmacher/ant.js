const DIRECTION=[-1,1]
class Ant{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=7
        this.height=7
        this.color="red"
        this.directionX=DIRECTION[Math.floor(Math.random()*DIRECTION.length)]
        this.directionY=DIRECTION[Math.floor(Math.random()*DIRECTION.length)]
        this.speedX=1
        this.speedY=1
        this.score=0
        this.isDead=false

    }
    get left(){
        return this.x
    }
    get right(){
        return this.x+this.width
    }
    get top(){
        return this.y
    }
    get bottom(){
        return this.y+this.height
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle=this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.closePath()
       

    }
    update(){
        this.x+=this.speedX*this.directionX
        this.y+=this.speedY*this.directionY
        if(this.x<=50){
            this.x=Math.floor(Math.random()*400)
            console.log(this.x)
        }if(this.x>=350){
            this.x=Math.floor(Math.random()*400)
        }
        if(this.y<=50){
            this.y=Math.floor(Math.random()*500)
            console.log(this.y)
        }if(this.y>=450){
            this.y=Math.floor(Math.random()*500)
        }
    }
}
export default Ant