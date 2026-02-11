class Product{


    constructor(n,p){
        //constructor function to create new real life instances(objects)
        //when we create an object, this constructor is the first function that gets called
        this.name =n;// data members
        this.price =p;
    }

    //member function
    // don't need to use the function keyword to create a function here
    displayProduct(){

    }

    buyProduct(){

    }
}


let iphone = new Product("iphone 15 pro max", 100000);
let macbook = new Product("macbook m3", 100000);
console.log(iphone,macbook);
console.log(typeof macbook);


