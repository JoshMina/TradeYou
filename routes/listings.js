var pg=require('pg').native;
var database = "postgress://minajosh:password@depot:5432/minajosh";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.send("listing site is working");
	pg.connect(database, function(err,client,done){
  		if(err){
    	console.error('Could not connect to the database');
    	console.error(err);
   	 return;
  		}
  	console.log('Connected to database');
  	//add a user 
  	//client.query("INSERT INTO Users (Username, Realname, Password) VALUES ('test', 'josh', 'pass');", function(error,result){
    //Check the data in table
    //client.query("SELECT * FROM Users;", function(error,result){
    //delete item 
    //client.query("DELETE FROM Users WHERE username=('test')", function(error,result){
    done();
    if(error){
      console.error('Failed to execute query');
      console.error(error);
      return;
    	}
    console.log(result);
  		});
	});

});
module.exports = router;


