var mongoose = require('mongoose');

//Deal Category schema
var dealCategorySchema = new mongoose.Schema({
	deal_category_name : {
		type : String,
		required : true
	},
	templates : [{
		picture_url : {
			type : String,
			required : true
		}
	}]
});

//Creating the model out of the schema
var DealCategory = mongoose.model('DealCategory', dealCategorySchema);

//Making the model available to our node app
module.exports = DealCategory;

