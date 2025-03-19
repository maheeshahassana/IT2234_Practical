
/*rest parameter
const mysum=(...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,89,2)*/


//rest parameter
const mysum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,89,2))
