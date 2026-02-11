const obj ={
    name: "Ayush",
    display: function(){
        console.log(this, "is the calling site");        
    } 
}
obj.display()

const obj2 = {
    name: "Kumar",
    display: ()=>{ // nothign is getting returned in this object
        console.log(this, "is the calling site");
        
    }
}

obj2.display() // prints empty object

// arrow functions don't have hteir ownn this, that is why it lexically binds with the surrouding scope
