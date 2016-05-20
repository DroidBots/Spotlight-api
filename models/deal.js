var mongoose = require('mongoose');
var dealCategory = require('../models/dealCategory.js');

//Deal Schema
var dealSchema = new mongoose.Schema({
	shop_id : {
		type : String,
		required : true
	},
	deal_title : {
		type : String,
		required : true
	},
	deal_description : {
		type : String,
		required : true
	},
	deal_picture_url : {
		type : String,
		required : true
	},
	deal_category : {
		type : String,
		required : true
	},
	deal_views : {
		type : Number,
		default : 0
	}
});


//Creating the model out of the schema
var Deal = mongoose.model('Deal', dealSchema);

//Making the model available to our node app
module.exports = Deal;


//Function for getting all deals 	route==='/api/deals/'
module.exports.getAllDeals = function(callback){
	Deal.find(callback);
}

//Function for getting deal by deal_id 		route==='/api/deal/:id'
module.exports.getDealById = function(id, callback){
	Deal.findById(id,callback);
}

module.exports.increaseViewCount = function(id, callback) {
	//*****TODO******
}

//Function for getting deals by shop_id 	route==='/api/deals/shop/:shop_id'
module.exports.getDealByShopId = function(shop_id, callback) {
	Deal.findOne({shop_id : shop_id}, callback);
}

//Function for getting deals by category_id 	route==='/api/deals/category/:category_id'
module.exports.getDealByCategoryId = function(category_id, callback) {
	dealCategory.findById(category_id, function(err, category) {
		Deal.findOne({deal_category : category.deal_category_name},callback);
	});
}

