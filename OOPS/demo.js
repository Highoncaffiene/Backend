var obj = {
    name: "Ayush",
    Company: "Google",
    // display: function(){
    //     console.log(this.name,"works at", this.Company);
    // }
    display: ()=>{
        console.log(this.name,"works at", this.Company);// this here points to tghe global this, the global this doesn't haave a property caled naame or company--
        
    }
}
// obj.display(); //Ayush works at google (without arrow function)
// prints undefined when arrow function is used, because arrow function has no this
var obj2 = {
    name: "sarthak",
    Company: "phonepe",
    // display: function(){
    //     console.log(this.name,"works at", this.Company);
    // }
    display: function(){ //works as it should with normal function writing
        setTimeout(() => {
            console.log(this.name,"works at", this.Company);
            
        }, 3000);
        
        
    }
}
obj2.display()