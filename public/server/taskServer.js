var express=require('express');
var router=express.Router();

var path=require('path');
var bodyPaser=require('body-parser');
router.use(bodyPaser.json());
var http = require('http');
var mongojs=require('mongojs');
// var multiparty=require('multiparty');
var fs = require('fs');
var collections=['taskcollection'];
var db = mongojs('mongodb://localhost:27017/task',collections);

// var ObjectId = require("mongojs").ObjectId;


router.post('/posttaskdata',function(req,res){

console.log(JSON.stringify(req.body));
db.taskcollection.insert(req.body,function(err,docs){
	res.json(docs);
});

});




router.post('/getalldata',function(req,res){


db.taskcollection.find({},function(err,docs){
	res.json(docs);
	console.log("getda"+JSON.stringify(docs));
});

});


module.exports=router;