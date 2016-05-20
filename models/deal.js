var mongoose = require('mongoose');

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