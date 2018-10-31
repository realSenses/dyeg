//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server = require('http').Server(app)
const io = require("./lib/socketClient");
io.listen(server);


//Port
const PORT = process.env.PORT || 3001;

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static Assets
app.use(express.static("client/build"));

//Routing, both API and view
app.use(routes);

//Mongo DB
const databaseUri = 'mongodb://localhost/gifcategories';
 if (process.env.MONGODB_URI) {
  // executes only when deployed as Heroku App
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}
 const mongo = mongoose.connection;
 mongo.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
 mongo.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

