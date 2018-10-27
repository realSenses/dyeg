const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	"mongodb://heroku_rxv55txq:heroku_rxv55txq@ds027425.mlab.com:27425/heroku_rxv55txq"
);

const Categories = require("./seed.js");

db.Gif
	.remove({})
	.then(() => db.Gif.collection.insertMany(Categories))
	.then(data => {
		console.log(data.ops.length + " Categories Inserted");
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
});