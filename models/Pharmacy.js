
const mongoose = require("mongoose");


const pharmacySchema = new mongoose.Schema(
	{	
		name: {
			type: String,
			required: true,
			trim: true,
		},
		address: {
			type: String,
			required: true,
		
		},
		
		contact: {
			type: Number,
			required: true,
			
		}
      
		
	},
	
);

module.exports = mongoose.model("pharmacy", pharmacySchema);