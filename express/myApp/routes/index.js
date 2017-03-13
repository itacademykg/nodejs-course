var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/apage', function(req, res, next) {
	res.send('my content');
});

router.get('/req', function(req, res, next)
{
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');
	var userSchema = new mongoose.Schema(
	{
		'ID':mongoose.Schema.ObjectId,
		'username':String,
		'firstname':String,
		'email':String
	});
	res.send('DB created');
});

module.exports = router;
