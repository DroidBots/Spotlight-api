var mongoose = require('mongoose');
var productCategory = require('../models/productCategory.js');

//Product Schema
var productSchema = new mongoose.Schema({
	shop_id : {
		type : String,
		required : true
	},
	product_name : {
		type : String,
		required : true
	},
	product_description : {
		type : String,
		required : true	
	},
	product_picture_url : {
		type : String,
		required : true
	},
	product_price : {
		type : Number,
		required : true
	},
	product_category : {
		type : String,
		required : true
	},
	product_views : {
		type : Number,
		default : 0
	},
	favourited_by : [{
		user_id : String
	}],
	tags : [{
		text : String
	}]
});

//Creating the model out of the schema
var Product = mongoose.model('Product', productSchema);

//Making the model available to our node app
module.exports = Product;

//Function for getting all products 	route==='/api/products/'
module.exports.getAllProducts = function(callback){
	Product.find(callback);
}

//Function for getting product by product_id 		route==='/api/product/:id'
module.exports.getProductById = function(id, callback){
	Product.findById(id,callback);
}

module.exports.increaseViewCount = function(id, callback) {
	//*****TODO******
}

//Function for getting products by shop_id 	route==='/api/products/shop/:shop_id'
module.exports.getProductByShopId = function(shop_id, callback) {
	Product.findOne({shop_id : shop_id}, callback);
}

//Function for getting products by category_id 	route==='/api/products/category/:category_id'
module.exports.getProductByCategoryId = function(category_id, callback) {
	productCategory.findById(category_id, function(err, category) {
		Product.findOne({product_category : category.product_category_name},callback);
	});
}