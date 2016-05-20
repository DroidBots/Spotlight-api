var mongoose = require('mongoose');

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
	product_picture_url {
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