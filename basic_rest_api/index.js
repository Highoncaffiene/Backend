const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // .use() sets up a middleware
app.use(logger);

app.use(express.json())
const PORT = 3000;

//mimic the db using an array
let blogList = [];
function logger(req,res,next){
    console.log(req.url);
    console.log(req.body);
    next();
}

function isAuthenticated(req, res, next){
    console.log("yes the user is authenticated");
    next();
}
app.get('/blogs',logger,isAuthenticated, (req, res)=>{ // the middle ware is added into the controller
    console.log("hitting");
    
    return res.status(200).json({ // returns the response object, but also with a status code in it.
        data:blogList,
        success: true,
        // code:200
    });
});

app.post('/blogs', (req, res)=>{
    // console.log(req.body)
    blogList.push({title: req.body.title,
         content: req.body.content,
        id : Math.floor(Math.random()*1000)
    });
    return res.status(201).json({
        success: true
    })
})

app.get('/blogs/:id', (req,res)=>{
    const result = blogList.filter((blog)=> blog.id==req.params.id)
    return res.status(200).json({
        data: result,
        success : true
})
})

app.listen(PORT, ()=>{
    console.log("Server started on port", PORT);
})

//Hot reloading- whenever u make any change in the codebase, the server automatically restarts( one of the package to do this is nodemon, 
// but new version of node also provides this feature by default)

//npx-> executes npm package binaries