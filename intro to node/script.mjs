// #!/usr/bin/env node  
// called chbang 
// console.log("hello world")
// const fs = require('fs/promises '); // promise based syntax
import {readFile,writeFile} from 'fs/promises';
// console.log(import.meta.url);
// const filePath = new URL('./index.html', import.meta.url); // write the name of the file you want to get the address of 
// let data = await readFile(filePath,{encoding: 'utf-8'})
// // console.log(data) // we're directly reading file stream  

// const obj = {
//     title :"my custom title",
//     body: "my custom body"
// }

// for(const[key,value] of Object.entries(obj)){
//     data = data.replace(`{${key}}`, value)
// }

// await writeFile(new URL ('./index.html', import.meta.url), data)

const filePath = new URL('./index.html', import.meta.url)
let data = await readFile(filePath, {encoding: 'utf-8'})
console.log(data);
