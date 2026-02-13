function Product(n,p,c){
    this.name = n;
    this.price = p;
    Category.call(this, c)

}

function Category(c){
    this.cateogoryname = c;
}

let p = new Product("iphone", 1000000, "Electronics");
console.log(p)