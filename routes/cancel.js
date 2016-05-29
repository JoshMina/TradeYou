var pg=require('pg');
var database = "postgres://pmwkbldxsjfraa:1zWyNo3qqD3tJRf1H8cEW4QQtM@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d3s2olru8n3gtj";
var express = require('express');
var router = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res) {
 // var pathToFile =
 // pg.defaults.ssl = true;
  pg.connect(database, function (err, client, done) {
    if (err) {
      console.error('Could not connect to the database');
      console.error(err);
      return;
    }
    console.log('Connected to database');
      //Check the data in table
      var sid = req.query.filr;
      var uid = req.query.Uid;
      //console.log(sid);
      
      client.query("DELETE FROM Listing WHERE sid = '"+sid+"'", function(error,result){
      done();
      if (error) {
        console.error('Failed to execute deletion from listing in buy query');
        console.error(error);
        return;
      } 
      });
      res.redirect('/userListing?Uid='+uid);
    });

});
module.exports = router;
