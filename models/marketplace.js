var mongoose = require('mongoose');

//Marketplace schema
var marketplaceSchema = new mongoose.Schema({
	marketplace_name : {
		type : String,
		required : true
	},
	marketplace_location : {
		latitude : String,
		longitude : String,
		required : true
	},
	shop_ids : [{
		id : String
	}]
});

//Creating the model out of the schema
var Marketplace = mongoose.model('Marketplace', marketplaceSchema);

//Making the model available to our node app
module.exports = Marketplace;

