var pg=require('pg');
var database = "postgres://pmwkbldxsjfraa:1zWyNo3qqD3tJRf1H8cEW4QQtM@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d3s2olru8n3gtj";
var express = require('express');
var router = express.Router();



router.get('/', function(req,res,next) {
	//res.send("listing site is working");
	var listings = [];
	var userid=req.query.Uid;
	console.log("This is browse uid" +userid);
	var tagFilter = req.query.filr;
	//console.log(tagFilter);
	pg.defaults.ssl = true; //Uncomment this if you cannot connect to browse
	//cars filter
	if (tagFilter == "cars"){
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			var i = 0;
			for (i =0; i < result.rows.length; i++){
			listings.push(result.rows[i]);			
			}

			// for (i =0; i < result.rows.length; i++){
			// console.log(listings[i]);
			// }

    		res.render('browse', {

    			Arrays:listings,
    			uid:userid
    			
    		});
    	done();
			});
	});
	}
	//electronics filter
	else if(tagFilter=='electronics'){
	var listings = [];
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			var i = 0;
			for (i =0; i < result.rows.length; i++){
			listings.push(result.rows[i]);			
			}

			// for (i =0; i < result.rows.length; i++){
			// console.log(listings[i]);
			// }

    		res.render('browse', {

    			Arrays:listings,
    			uid:userid
    			
    		});
    	done();
			});
	});
	}
	//books filter
	else if(tagFilter=='books'){
	var listings = [];
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			var i = 0;
			for (i =0; i < result.rows.length; i++){
			listings.push(result.rows[i]);			
			}

			// for (i =0; i < result.rows.length; i++){
			// console.log(listings[i]);
			// }

    		res.render('browse', {

    			Arrays:listings,
    			uid:userid
    			
    		});
    	done();
			});
	});
	}
		//toys tag
	else if(tagFilter=='toys'){
		var listings = [];
		pg.connect(database, function (err, client, done) {
			if (err) {
				console.error('Could not connect to the database');
				console.error(err);
				return;
			}
			console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
				if (error) {
					console.error('Failed to execute query');
					console.error(error);
					return;
				}
				var i = 0;
				for (i =0; i < result.rows.length; i++){
					listings.push(result.rows[i]);
				}

				// for (i =0; i < result.rows.length; i++){
				// console.log(listings[i]);
				// }

				res.render('browse', {

					Arrays:listings,
					uid:userid

				});
				done();
			});
		});
	}
		//art tag
	else if(tagFilter=='art'){
		var listings = [];
		pg.connect(database, function (err, client, done) {
			if (err) {
				console.error('Could not connect to the database');
				console.error(err);
				return;
			}
			console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
				if (error) {
					console.error('Failed to execute query');
					console.error(error);
					return;
				}
				var i = 0;
				for (i =0; i < result.rows.length; i++){
					listings.push(result.rows[i]);
				}

				// for (i =0; i < result.rows.length; i++){
				// console.log(listings[i]);
				// }

				res.render('browse', {

					Arrays:listings,
					uid:userid

				});
				done();
			});
		});
	}
		//furniture tag
	else if(tagFilter=='furniture'){
		var listings = [];
		pg.connect(database, function (err, client, done) {
			if (err) {
				console.error('Could not connect to the database');
				console.error(err);
				return;
			}
			console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
				if (error) {
					console.error('Failed to execute query');
					console.error(error);
					return;
				}
				var i = 0;
				for (i =0; i < result.rows.length; i++){
					listings.push(result.rows[i]);
				}

				// for (i =0; i < result.rows.length; i++){
				// console.log(listings[i]);
				// }

				res.render('browse', {

					Arrays:listings,
					uid:userid

				});
				done();
			});
		});
	}
		//stationary tag
	else if(tagFilter=='stationary'){
		var listings = [];
		pg.connect(database, function (err, client, done) {
			if (err) {
				console.error('Could not connect to the database');
				console.error(err);
				return;
			}
			console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing WHERE tag = '"+tagFilter+"';", function(error,result){
				if (error) {
					console.error('Failed to execute query');
					console.error(error);
					return;
				}
				var i = 0;
				for (i =0; i < result.rows.length; i++){
					listings.push(result.rows[i]);
				}

				// for (i =0; i < result.rows.length; i++){
				// console.log(listings[i]);
				// }

				res.render('browse', {

					Arrays:listings,
					uid:userid

				});
				done();
			});
		});
	}
	else{
	var listings = [];
	pg.connect(database, function (err, client, done) {
		if (err) {
			console.error('Could not connect to the database');
			console.error(err);
			return;
		}
		console.log('Connected to database');
			//Check the data in table
			client.query("SELECT * FROM Listing;", function(error,result){
			if (error) {
				console.error('Failed to execute query');
				console.error(error);
				return;
			}
			console.log("IMAGE PATH"+result.rows[0].imagepath);
			var i = 0;
			for (i =0; i < result.rows.length; i++){
			listings.push(result.rows[i]);			
			}

			// for (i =0; i < result.rows.length; i++){
			// console.log(listings[i]);
			// }

    		res.render('browse', {

    			Arrays:listings,
    			uid:userid
    			
    		});
    	done();
			});
	});/*pg.connect exit*/ } //else exit

});


module.exports = router;