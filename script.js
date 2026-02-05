const fs = require('node:fs');
// writeFile is used to write in a new file
// fs.writeFile("hey.txt", "hey, how are you ?", function(err){  
//     if(err) console.error(err);
//     else console.log("Done");
    
// })

// appendFile is used to write in an already created file
// fs.appendFile("hey.txt", "I'm  good too!",  function(err){
//     if(err) console.error(err)
//     else console.log("Done!")
// })


fs.rename("hey.txt", "hello.txt", function(err){
    if(err) console.error(err)
    else console.log("Done!")
})