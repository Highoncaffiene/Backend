const player1 = {
    firstname : "Virat",
    lastname: "Kohli",
    numberToBat: 3,
    canBowl : false,
    getdetails : function(){

        console.log(this.firstname, this.lastname, "comes at", this.numberToBat);
        
    }
}

const obj = function(){
    console.log(this.getdetails());
    
}

// obj();
let x = obj.bind(player1)
x();