const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('server has started on port 3000')
});

//ROUTES

app.get("/" , function(req,res){
  res.send("<h1>ESDVSFBVZCVSDVZS sfsdgfsrgf</h1>")
})

//allows especify when the browser GET in touch, and what its suposed to happen
app.get("/contact" , function(req , res) {
  res.send("Contact me at ernestopoleog@gmail.com");
  })

app.get("/about" , function(req , res) {
  res.send("Hello! I'm Ernesto, a Venezuelan student of Web Developing actually living in Oakville, ON.");
})

app.get("/hobbies" , function(req,res) {
  res.send("egdedrsgsbdzgbxdfbsdbedvb sdvjnsdakjvnsdvns sdjvnlskdnvlk");
})
