var mongoose = require('mongoose');

//Shop Schema
var shopSchema = new mongoose.Schema({
	shop_number : {
		type : String,
		required : true
	},
	login_email : {
		type : String,
		required : true
	},
	login_password : {
		type : String,
		required : true
	},
	shop_name : {
		type : String,
		required : true
	},
	shop_address : {
		type : String,
		required : true
	},
	shop_rating : {
		type : Number,
		default : 0
	},
	shop_category : {
		type : String,
		required : true
	},
	favourited_by : [{
		user_id : String
	}],
	shop_deals : [{
		deal_id : String
	}],
	shop_products : [{
		product_id : String
	}],
	shop_views : {
		type : Number,
		default : 0
	},
	marketplace_id : {
		type : String,
		// required : true
	},
	shop_location : {
		type : String,
		required : true
	}
});

//Creating the model out of the schema
var Shop = mongoose.model('Shop', shopSchema);

//Making the model available to our node app
module.exports = Shop;

//Function for getting all shop 	route==='/api/shops/'
module.exports.getAllShops = function(callback){
	Shop.find(callback);
}

//Function for getting shop by shop_id 		route==='/api/shops/:id'
module.exports.getShopById = function(id, callback){
	Shop.findById(id,callback);
}

//Function to get marketplace id
