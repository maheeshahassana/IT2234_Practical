/*
function printMsg(){
	console.log("Hello JS");
}

printMsg()*/

const msg =()=>{return console.log ("Hello JS")}
//console.log(msg)
msg()

//write arrow function to sum 2 numbers

const sum =(a,b)=>{return a+b}
console.log(sum(4,9))

//default parameter
const mult=(a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(3))

//rest parameter
const mysum=(...n)=>{
	console.log(n)
}
mysum(4,5,6,89,2)

