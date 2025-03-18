//arrayoperation
//push and pop

let arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the Array using pop and push
// a b c d ->d c b a
console.log("*******************")

let arr4=['a','b','c','d']
console.log("original array: ")
console.log(arr4)
console.log("reverse array: ")
for(let i=0;i<arr4.length;i++){
	console.log(arr4.pop())

}