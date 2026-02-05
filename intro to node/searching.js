function linearSearch(arr,x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== x){
            return i;
        }
    }
    return NaN
}
function binarySearch(arr,x){
    // some code 
}

export default function fun(){
    console.log("Fun");
}
console.log("Ending searching")
// module.exports={ // expose the details to the outer world
//     linear: linearSearch,
//     binary: binarySearch
// }
// module.exports = linearSearch
