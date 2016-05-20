var mongoose = require('mongoose');

//Product Category schema
var productCategorySchema = new mongoose.Schema({
	product_category_name : {
		type : String,
		required : true
	}
});

//Creating the model out of the schema
var ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

//Making the model available to our node app
module.exports = ProductCategory;

//**** TO-DO********  Function to get ID of the category, arguments being the name of category