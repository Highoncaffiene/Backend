class Product{

    // a class may have ony one constructor
    constructor(n,p){
        //constructor function to create new real life instances(objects)
        //when we create an object, this constructor is the first function that gets called
        this.name =n;// data members
        this.price =p;
        //assume--> return this
        //automatically returns the object created using new
        // return {name :"Ayush", age :20}
    }

    //member function
    // don't need to use the function keyword to create a function here
    displayProduct(){
        console.log(this.name, this.price)

    }

    buyProduct(){

    }
}


let iphone = new Product("iphone 15 pro max", 100000);
let macbook = new Product("macbook m3", 100000);
console.log(iphone,macbook);
// console.log(typeof macbook);
// when uusing class, we cannot use the constructor without using the new keyword