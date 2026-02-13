const player1 = {
    firstname : "Virat",
    lastname: "Kohli",
    numberToBat: 3,
    canBowl : false,
    getdetails : function(){
        console.log(this.firstname, this.lastname, "comes at", this.numberToBat); 
    }
}

// const obj = function(){
    // console.log(this.getdetails()); // doesn't have the context of this   
// }

// obj();
// let x = obj.bind(player1)// creats a new function where this is permanently set to the plaayer1
// x(); // to obj function, and as "this" is set to player1 permanently, so this.getdetails() goes to getdetails key in player1, so finally we have plaayer1.getdetails() inside console.log()
// and inside getdetails(), this is set to player1, and this prints player1.firstname and so on and so forth  
// console.log(x)

const obj2 = function(x,y){
    console.log(this.getdetails())
    console.log(x+y);
}
obj2.call(player1, 2,45)



// bind gives u a completely new function where this is permanently binde to the argumen thata u have given
//whereas call will immediately call the same function with the object binded towards te this context
// in case of call, what "this" means, we specify in the first argument itself, and after that are the normal arguments that the functionn takes