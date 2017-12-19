

var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends)
	});

	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		newFriend.routeName = newFriend.name.replace(/\s+/g, "").
		toLowerCase();

		console.log(newFriend);
		friends.push(newFriend);

		res.json(newFriend);
	});


};
/*
var app= express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/api/:friends", function(req, res){
	var chosen = req.params.friends;

	if(chosen){
		console.log(chosen);

		for(var i =0; i < friends.lenth; i++){
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


//starts listening
app.listen(PORT, function(){
	console.log("App is listening on PORT "+ PORT);
});

//module.exports = "apiRoutes.js";
*/