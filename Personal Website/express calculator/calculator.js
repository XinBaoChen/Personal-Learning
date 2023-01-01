//jsint esversion:6
// npm install express
// npm init -y for node
// ctr C to end server!
// nodemon(npm package) server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


//post nested objects
app.use(bodyParser.urlencoded({extended: true}));



//get is a Express function
// slash sign is root
//send brower a response

app.get("/", function( request,response ){
//__dirname useful to know the directory when deploying the website
 response.sendFile(__dirname +"/index/index.html");
});

app.post("/", function(req, res){
   
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.get("/contact", function(req, res){
  res.send("Contact me at: chensteven321@gmail.com");
});
//request to see the server
app.listen(3000, function(){
    console.log("Server Started on port 3000");
});