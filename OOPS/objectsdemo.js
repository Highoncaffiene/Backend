let arr = [1,2,3,4]

console.log(typeof arr)

let obj = {
    x: 10,
    y:20
}

obj.x = 20// value changed
// Object.freeze(obj);


Object.seal(obj) // can't add new properties but can update an existing onne
obj.x = 456
obj.z = 30;

console.log(obj);
