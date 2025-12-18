import carSpeed from "./road.js"

const can=document.getElementById("canvas")
const ctx=can.getContext("2d")


let speed=20
let direction={
    dx:1,
    dy:1
}
let car=new carSpeed(speed,direction,ctx)
car.speed()






