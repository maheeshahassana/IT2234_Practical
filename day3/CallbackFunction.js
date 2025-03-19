//callbackfunction
//const myName=(name)=>{console.log("my name is "+name)}

const greet=(msg,fun)=>{
	console.log("Hi.. "+msg)
	fun()
}
//const myName=(name)=>{console.log("my name is"+name)}

greet("Good morning",()=>{console.log("my name is David")})