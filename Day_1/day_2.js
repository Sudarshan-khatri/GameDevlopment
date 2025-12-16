//Numbers
let num=1
let num2=3.4

//add 
let sum=num+num2
//sub
let sub=num+num2
//mul
let mul=num*num2
//div
let div=num/num2

//remainder
let rem=num%num2


// Area of rectangel
let width=10
let height=2.5
let area=width*height
console.log(`Area of rectangle:${area}`)


// circle 
let r=5.6
let res=2*Math.PI*r
console.log("the c of circle is:",res.toFixed(2))

//Area of the circle is pi^2
//d=50
let diameter=50
let radius=diameter/2
let res1=Math.PI*radius**2
console.log("Area of circle:",res1.toFixed(2))

//find the perimeter of a rectangle :2(w+h)
console.log(`Perimeter of rectangle:${2*(20+50)}`)


//understand BODMas 5
//online js visulaization
//jsv9000

//add two number 
function add(nm1,nm2){
    console.log(`Sum :${nm1+nm2}`)
}
add(2,3)


//assignment :
// create a function km to m:
function distanceConverter(km){
    return km*1000
}
console.log(`Distance in meter:${distanceConverter(2.3)}`)
//square function 
function square(nm){
    return Math.pow(nm,2)
}
console.log(`square:${square(2)}`)
//area of rectangle
function rectangleArea(l,b){
    return l*b
}
console.log(`Area of Rectangle:rectangleArea(2,3)`)