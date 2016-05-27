var express = require('express');
var router = express.Router();

var Marketplace = require('../models/marketplace.js');

//GET all marketplaces
router.get('/',function(req,res,next){
	Marketplace.find(function(err,market){
		if(err) {
			res.send(err);
		}
		else {
			res.json(market);
		}
	});
});

//GET marketplace by id
router.get('/:id',function(req,res,next){
	Marketplace.findById(req.params.id, function(err, market){
		if(err) {
			res.send(err);
		}
		else {
			res.json(market);
		}
	});
});

//POST 
router.post('/create', function(req,res,next){
	
	//***TO DO *** Add validations to the obtained fields
	var newMarketplace = new Marketplace({
		marketplace_name : req.body.marketplace_name,
		marketplace_location : req.body.marketplace_location
	});

	Marketplace.save(function(err){
		if(err) {
			res.send(err);
		}
		else {
			res.json({
				message : "Marketplace successfully created",
				data : newMarketplace
			});
		}
	});
});


module.exports = router;