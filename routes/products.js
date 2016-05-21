var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

//GET all products
router.get('/',function(req,res,next){
	Product.getAllProducts(function(err,products){
		if(err) {
			res.send(err);
		}
		else {
			res.json(products);
		}
	});
});

//GET product by product_id
router.get('/:id',function(req,res,next){
	Product.getProductById(req.params.id, function(err,product){
		if(err) {
			res.send(err);
		}
		else {
			res.json(product);
		}
	});
});

//POST 
router.post('/create', function(req,res,next){
	
		//***TO DO *** Add validations to the above obtained fields

	var newProduct = new Product({
		shop_id : req.body.shop_id,
		product_title : req.body.product_title,
		product_description : req.body.product_description,
		product_picture_url : req.body.product_picture_url,
		product_category : req.body.product_category
	});

	newProduct.save(function(err) {
		if(err) {
			res.send(err);
		}
		else {
			res.json(newProduct);
		}
	});
});

//GET product by shop_id
router.get('/shop/:id',function(req,res,next){
	Product.getProductByShopId(req.params.id, function(err,product){
		if(err) {
			res.send(err);
		}
		else {
			res.json(product);
		}
	});
});

//GET product by category_id
router.get('/:id',function(req,res,next){
	Product.getProductByCategoryId(req.params.id, function(err,product){
		if(err) {
			res.send(err);
		}
		else {
			res.json(product);
		}
	});
});

//GET request to increment product_views
router.get('/:id', function(req,res,next) {
	Product.increaseViews(req.params.id, function(err,product) {
		if(err) {
			res.send(err);
		}
		else {
			res.json({
				message : "views successfully incremented"
			});
		}
	});
});

module.exports = router;