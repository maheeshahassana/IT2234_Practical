const multtwo = (n) => n * 3;

const myarr = (mul, ...n) => {
    console.log(n.map(mul)); 
};

myarr(multtwo, 4, 5, 6, 6, 2);
