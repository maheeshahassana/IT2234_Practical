function Sum(){
	return 5+6
}

console.log(Sum())

function Sub(a,b){
	return a-b
}
console.log(Sub(5,3))

console.log("_______________________________________________________________")
//write a boolean function to find a given number is prime

function primeNo(p) {
    if (p <= 1) {
        console.log("Enter a positive number greater than 1");
        return;
    }
    
    let isPrime = true;
    
    for (let i = 2; i < p; i++) { // Check divisibility from 2 to p-1
        if (p % i == 0) {
            isPrime = false;
            break; // If found a divisor, exit early
        }
    }
    
    if (isPrime) {
        console.log(p + " is a prime number");
    } else {
        console.log(p + " is not a prime number");
    }
}

primeNo(5); // Output: 5 is a prime number
primeNo(8); // Output: 8 is not a prime number

// write recursive function to print number from 1 to n

function printNumbers(n, current = 1) {
    if (current > n) {
        return; 
    }
    console.log(current);
    printNumbers(n, current + 1); // Recursive call with next number
}

console.log("_______________________________________________________________");

printNumbers(5); 
