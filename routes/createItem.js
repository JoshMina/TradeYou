/**
 * Created by bucklawr on 15/05/16.
 */
var pg=require('pg');
var database = "postgres://pmwkbldxsjfraa:1zWyNo3qqD3tJRf1H8cEW4QQtM@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d3s2olru8n3gtj";
var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'upload/' })
var fs = require('fs');

router.get('/', function (req,res) {
    res.render('createItem', {imagePlaced: false,    uid:req.query.Uid});
});

router.post('/', multer({ dest : './uploads/'}).single('filename'), function(req,res){
    var tmp_path = req.file.path;
    var target_path = './public/images/' + req.file.originalname;

    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { res.render('createItem', {imagePlaced: true, im: "/images/"
                                + req.file.originalname, uid:req.query.Uid})
    });
    src.on('error', function(err) { res.sendStatus(500); });
});

router.get('/redirect', function (req,res){
    var file = req.query.file
    var title = req.query.title;
    var price = req.query.price;
    var quan = req.query.quan;
    var desc = req.query.txtEdit;
    var tag = req.query.tag;
    var longestSide = req.query.ls;
    var height = req.query.h;
    var weight = req.query.w;
    var addrLine1 = req.query.a1;
    var addrLine2 = req.query.a2;
    var city = req.query.cit;
    var suburb = req.query.sub;
    var email = req.query.em;
    var phoneNum = req.query.phoneNum;
    var uid = req.query.Uid;
    console.log("This is create item uid"+uid);
    
    if(file == "") {file = "none"}
    if(title == "") {title = "none"}
    if(price == "") {price = -1}
    if(quan == "") {quan = -1}
    if(desc == "") {desc = "none"}
    if(tag == undefined) {tag = "none"}
    if(longestSide == "") {longestSide = -1}
    if(height == "") {height = -1}
    if(weight == "") {weight = -1}
    if(addrLine1 == "") {addrLine1 = "none"}
    if(addrLine2 == "") {addrLine2 = "none"}
    if(city == "") {city = "none"}
    if(suburb == "") {suburb = "none"}
    if(email == "") {email = "none"}
    if(phoneNum == "") {phoneNum = -1}

    console.log("file: " + file + "\n" +
        "title: " + title + "\n" +
        "price: " + price + "\n" +
        "quantity: " + quan + "\n" +
        "description: " + desc + "\n" +
        "tag: " + tag + "\n" +
        "longest side: " + longestSide + "\n" +
        "height: " + height + "\n" +
        "weight: " + weight + "\n" +
        "add line 1: " + addrLine1 + "\n" +
        "add line 2: " + addrLine2 + "\n" +
        "city: " + city + "\n" +
        "suburb: " + suburb + "\n" +
        "email: " + email + "\n"  +
        "phone number: " + phoneNum + "\n");

    pg.defaults.ssl = true;

    pg.connect(database, function (err, client, done) {
        if (err) {
            console.error('Could not connect to the database');
            console.error(err);
            return;
        }
        console.log('Connected to database');

        client.query("INSERT INTO Listing (Uid, imagepath, itemname, price, tag, " +
            "quantity, longestside, height, weight, address1, address2, city, suburb, email, phonenum, " +
            "description) VALUES ( 1,'" +
            file + "','" + title + "'," + price + ",'" + tag + "'," + quan + "," + longestSide + "," + height +
            "," + weight + ",'" + addrLine1 + "','" + addrLine2 + "','"  + city + "','" + suburb + "','" + email +
            "'," + phoneNum + ",'" + desc + "');", function(error,result){
            done();
            if (error) {
                console.error('Failed to add item');
                console.error(error);
                return;
            }
        });
    });

    res.redirect('/itemPage?Uid='+uid);
});


module.exports = router;