const express = require("express")
const app = express()

var route = require('./router')

// app.get("/",(req,res) => {
//     res.send("Hello")
// })

// app.get("/router",(req,res) => {
//     res.send("Hello from /router")
// })


//express.Router
// app.use('/router', route);


// Dynamic routing
// app.get('/:name', (req, res)=>{
//     res.send('The id you specified is ' + req.params.name);
//  });

//Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//     console.log("A request for things received at " + Date.now());
//     next();
//  });
 
//  // Route handler that sends the response
//  app.get('/things', function(req, res){
//     res.send('Things');
//  });

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });

app.listen(3000)