
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
			
		},
        email: {
			type: String,
			required: true,
			trim: true,
		},

	
		password: {
			type: String,
			required: true,
		},
		medicine: [{
            type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "medicine",
        }],
		
	},
	
);

module.exports = mongoose.model("pharmacy", pharmacySchema);