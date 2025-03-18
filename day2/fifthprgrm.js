//arr=[1,2,3,4,5,6]
//target=7
//write a code to find aa pairs that sum up to the target 

let arr = [1, 2, 3, 4, 5, 6];
let target = 7;

arr.forEach((n, i) => {
    arr.slice(i + 1).forEach(m => {
        if (n + m === target) {
            console.log(n, m);
        }
    });
});




console.log("**************************")
/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and b
*/

let a=[4,5,6,3,7]
let b=[8,3,2,1,5]

a.forEach((n)=>{
	b.forEach((m)=>{
		if (n==m){
			console.log(n)
		}
		
	})
})