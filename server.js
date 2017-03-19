var  express = require('express');
var app = express();
var router=express.Router();
var path=require('path');

var bodyParser=require('body-parser');


var http = require('http');


var mongojs=require('mongojs');
var db = mongojs('mongodb://localhost:27017/task', ['taskcollection']);
var port =Number(process.env.PORT||3000);
app.use('/',express.static(__dirname+'/public'));


app.use(require(path.join(__dirname+'/public/server/taskServer.js')));





app.listen(port,function(){
	console.log("listen on port:"+port);
})

module.exports=router;