function product(n,p){
    this.name = n;
    this.price = p;
}

const p1 = new product('iphone',120000);
const p2 =  product('macbook',130000);

// console.log(p1)
console.log(p2) // undefined, because we called product without new function, so there is no new empty object created for this to point, and the product
//function is not actually returning something.

//withjout the new keyword, a function is jhust going to behave as a normal function 
//with a new keyword, a function acts as a class.