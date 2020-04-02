const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/" , function(req, res){
  // console.log(req.body.cityName);
  const query = req.body.cityName;
  const unit = "metric";
  const apiKey = "30843cf668ebc533aa27dafaef8dc41d";

  const url="https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&units=" + unit + "&q=" + query

    https.get(url, function(response){
    console.log(response.statusCode);

  response.on("data" , function(data){
  const weatherData = JSON.parse(data)
  const temp = weatherData.main.temp
  // console.log(temp);
  const description = weatherData.weather[0].description
  // console.log(description);
  const icon = weatherData.weather[0].icon
  const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>")
    res.write("<h3>The weather is currently " + description + "</h3>")
    res.write("<img src=" + imgURL +">")
    res.send()

    })
  })
})



app.listen(3000, function() {
  console.log("Server running on port 3000")
})
