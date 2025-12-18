import CircleBounce from "./logic.js"

const canva=document.getElementById("canvas")
const ctx=canva.getContext("2d")


canva.addEventListener("click",function(e){
    console.log(e.clientX)
    console.log(e.clientY)
    let value=new CircleBounce(e.clientX,e.clientY,20,20,ctx)
    value.create()
})

