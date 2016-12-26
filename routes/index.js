var express = require('express');
var router = express.Router();
var books = require('../models/book');
var mongoose = require('mongoose');
require('../test/index');


router.get('/',function(req,res){
	res.send("<h1>Hello, World!</h1>");
});

router.get('/books',function(req,res){
	books.find({})
		.exec(function(err,results){
			if(err){
				console.log("error has occured")
			}
			res.json(results);
		});
});

router.post('/books',function(req,res){
	var newBook = new books;
	newBook.title = req.params.title;
	newBook.author = req.params.author;
	newBook.category = req.params.category;

	newBook.save(function(err){
		if(err){
				console.log("error has occured")
			}
	});
});

router.get('/books/:id',function(req,res){
	books.findOne({_id: req.params.id})
		.exec(function(err,book){
			if(err){
				console.log("Not Found");
			}
			res.json(book);
		});
});

router.put('/books/:id',function(req,res){
	books.findOneAndUpdate({_id: req.params.id},{$set: {title: req.params.title}}, {upsert: true},function(err,book){
			if(err){
				console.log("Not Found");
			}
			res.json(book);
		});
});

router.delete('/books/:id',function(req,res){
	books.findByIdAndRemove(req.params.id)
		.exec(function(err,book){
			if(err){
				console.log("Not Found");
			}
			res.json(book);
		});
});

module.exports = router;