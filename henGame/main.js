import Egg from "./logic.js"

const can=document.getElementById("canvas")
const ctx=can.getContext("2d")


let x=Math.floor(Math.random()*innerWidth)
let y=Math.floor(Math.floor(Math.random()*innerHeight))
let size=20
let speed=4

let egg=new Egg(x,y,size,speed,ctx)
egg.move()