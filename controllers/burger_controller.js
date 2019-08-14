
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

router.get('/', function(req,res){
	burger.selectAll(function(data){

		res.render('index', {burger: data});
	});
});

router.post('/create', function(req, res){
	burger.insertOne(req.body.type, false, function(){
		res.redirect('/')
	})
});

router.put("/update/:id", function(req, res){
	burger.updateOne(req.params.id, function(err, data){
		res.redirect('/');
	})
});

module.exports = router;