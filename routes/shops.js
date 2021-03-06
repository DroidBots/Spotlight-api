var express = require('express');
var router = express.Router();

var Shop = require('../models/shop.js');

//GET all shops
router.get('/',function(req,res,next){
	Shop.getAllShops(function(err,shops){
		if(err) {
			throw err;
		}
		else {
			res.json(shops);
		}
	});
});

//GET shop by shop_id
router.get('/:id',function(req,res,next){
	Shop.getShopById(req.params.id, function(err,shop){
		if(err) {
			throw err;
		}
		else {
			res.json(shop);
		}
	});
});

//POST 
router.post('/create', function(req,res,next){
	
	//Call function to get marketplace id corresponding to the market place provided ***TO DO***
	//***TO DO *** Add validations to the above obtained fields

	var newShop = new Shop({
		shop_number : req.body.shop_number,
		login_email : req.body.login_email,
		login_password : req.body.login_password,
		shop_name : req.body.shop_name,
		shop_address : req.body.shop_address,
		shop_category : req.body.shop_category,
		shop_location : req.body.shop_location,
		marketplace_id : req.body.marketplace_id
	});

	newShop.save(function(err) {
		if(err) {
			res.send(err);
		}
		else {
			res.json(newShop);
		}
	});

});

module.exports = router;