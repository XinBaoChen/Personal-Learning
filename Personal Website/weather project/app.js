const { response } = require("express");
const express = require("express");
const http = require("https");

const app = express();


app.get("/", function(req, res){

    const link = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=3816308500269cca770b6b3e4631c961";

    http.get(link, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);
            console.log(temp);
            
        });
    });
    res.send("Server is up and running");
})







app.listen(3000, function( ){
    console.log("Server is running on port 3000.");
})