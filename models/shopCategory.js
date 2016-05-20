var mongoose = require('mongoose');

//Shop CAtegory schema
var shopCategorySchema = new mongoose.Schema({
	shop_category_name : {
		type : String,
		required : true
	},
	picture_url : {
		type : String,
		required : true
	}
});

//Creating the model out of the schema
var ShopCategory = mongoose.model('ShopCategory', shopCategorySchema);

//Making the model available to our node app
module.exports = ShopCategory;

//**** TO-DO********  Function to get ID of the category, arguments being the name of category