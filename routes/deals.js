var express = require('express');
var router = express.Router();

var Deal = require('../models/deal.js');

//GET all deals
router.get('/',function(req,res,next){
	Deal.getAllDeals(function(err,deals){
		if(err) {
			res.send(err);
		}
		else {
			res.json(deals);
		}
	});
});

//GET deal by deal_id
router.get('/:id',function(req,res,next){
	Deal.getDealById(req.params.id, function(err,deal){
		if(err) {
			throw err;
		}
		else {
			res.json(deal);
		}
	});
});

//POST 
router.post('/create', function(req,res,next){
	
		//***TO DO *** Add validations to the above obtained fields

	var newDeal = new Deal({
		shop_id = req.body.shop_id;
		deal_title = req.body.deal_title;
		deal_description = req.body.deal_description;
		deal_picture_url = req.body.deal_picture_url;
		deal_category = req.body.deal_category;
	});

	newDeal.save(function(err) {
		if(err) {
			res.send(err);
		}
		else {
			res.json(newDeal);
		}
	});
});