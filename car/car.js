const can=document.getElementById("canvas")
const ctx=can.getContext("2d")


ctx.beginPath()
ctx.rect(20,150,100,40)
ctx.fillStyle="gray"
ctx.fill()

ctx.beginPath()
ctx.arc(40,190,10,0,2*Math.PI)
ctx.fillStyle="red"
ctx.fill()

ctx.beginPath()
ctx.arc(90,190,10,0,2*Math.PI)
ctx.fillStyle="red"
ctx.fill()



ctx.beginPath()
ctx.moveTo(120,120)
ctx.lineTo(220,290)
ctx.fillStyle="yellow"
ctx.fill()