// node package i need for my app
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//host for heroku
const PORT = process.env.PORT || 9000;
//to use express app to handle  request and respondes 
const app = express ();
app.use(logger("dev"));
//
app.use(express.urlencode({extended:true}));
app.use(express.json());
// express can look for js file in public
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//ROUTES

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://yoloko:Godisgreat@44@ads125871.mlab.com:25871/heroku_0xn0jnk7"
);




app.listen(PORT,()=>{
    console.log(`App running on port${PORT}!`);
})
