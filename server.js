

//set up
var express = require("express");
var bodyParser = require("body-parser");
//var path = require("path");
//var friends = require("./app/data/friends.js")



var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

/*
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res){
	res.json(friends);
});

app.get("/api/:friends", function(req, res){
	var chosen = req.params.friends;

	if(chosen){
		console.log(chosen);

		for(var i = 0; i < friends.lenth; i++){
			if (chosen === friends[i].routeName) {
				return res.json(friends[i]);
			}
		}
		return res.json(false);
	}
	return res.json(friends);
});

app.post("/api/friends", function(req, res){
	var newFriend = req.body;
	newFriend.routeName = newFriend.name.replace(/\s+/g, "").
	toLowerCase();

	console.log(newFriend);
	friends.push(newFriend);

	res.json(newFriend);
});

*/

app.listen(PORT, function(){
	console.log("App is listening on PORT "+ PORT);
});