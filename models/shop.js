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
		type : Number
	},
	shop_category : {
		type : String
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
	views : {
		type : Number
	},
	marketplace_id : {
		type : String
	},
	shop_location : {
		latitude : String,
		longitude : String
	},
}, {
	timestamps : true
});

//Creating the model out of the schema
var Shop = mongoose.model('Shop', shopSchema);

//Making the model available to our node app
module.exports = Shop;