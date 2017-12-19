//htmlRoutes.js
//Get route to /survey - will display the survey page
//catch-all route that leads to home.html which displays home page

var path= require("path");

module.exports = function(app) {



app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//starts listening


};