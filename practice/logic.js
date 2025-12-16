const can=document.getElementById("canvas")
const ctx=can.getContext("2d")
class BoxTimer{
    draw(time){
        ctx.beginPath()
        ctx.rect(200,80,100,200)
        ctx.fillStyle="black"
        ctx.fill()

        ctx.beginPath()
        ctx.rect(227,250,50,100)
        ctx.fill()

        if(time>=0 && time<=30){
            ctx.beginPath()
            ctx.arc(250,120,15,0,2*Math.PI)
            ctx.fillStyle="red"
            ctx.fill()
        }else if(time>30 && time<=50){
            ctx.beginPath()
            ctx.arc(250,160,15,0,2*Math.PI)
            ctx.fillStyle="green"
            ctx.fill()

        }else{
            ctx.beginPath()
            ctx.arc(250,200,15,0,2*Math.PI)
            ctx.fillStyle="yellow"
            ctx.fill()
        }
    }
}
const light=new BoxTimer()


setInterval(function(){
    const time=new Date().getSeconds()
    console.log(time)
    light.draw(time)
},1000)

