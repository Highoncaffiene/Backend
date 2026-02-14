function Product(n,p,c){
    this.name = n;
    this.price = p;
    Category.call(this, c)// here, this points to the new empty object created at teh call site p, and the Category functio gets called, p.categoryname sets c.

}

function Category(c){
    this.cateogoryname = c;
    
}
Category.prototype.getCategoryname = function (){
        console.log("Called")
        console.log(this.cateogoryname); 
    }

Product.prototype = Object.create(Category.prototype) // creates a new object whose prototype contains the Category.prototype

let p = new Product("iphone", 1000000, "Electronics");
p.getCategoryname()