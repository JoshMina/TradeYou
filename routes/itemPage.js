/**
 * Created by bucklawr on 22/05/16.
 */
var pg=require('pg');
var database = "postgres://pmwkbldxsjfraa:1zWyNo3qqD3tJRf1H8cEW4QQtM@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d3s2olru8n3gtj";
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {

    pg.defaults.ssl = true; //Uncomment this if you cannot connect to browse
    pg.connect(database, function (err, client, done) {
        if (err) {
            console.error('Could not connect to the database');
            console.error(err);
            return;
        }
        console.log('Connected to database');
        client.query("SELECT * FROM Listing ORDER BY Sid DESC LIMIT 1;", function(error,result){
            if (error) {
                console.error('Failed to execute query');
                console.error(error);
                return;
            }
            var arr = [result.rows.uid, result.rows[0].imagepath, result.rows[0].itemname, result.rows[0].price,
                result.rows[0].tag, result.rows[0].email, result.rows[0].quantity, result.rows[0].longestside,
                result.rows[0].height, result.rows[0].weight, result.rows[0].address1, result.rows[0].address2,
                result.rows[0].city, result.rows[0].suburb, result.rows[0].email, result.rows[0].phonenum,
                result.rows[0].description];
            done();
            res.render('itemPage', {item: arr});
            });
        });
});

module.exports = router;