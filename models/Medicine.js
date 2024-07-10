
const mongoose = require("mongoose");


const medicineSchema = new mongoose.Schema(
	{
		
		name: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			trim: true,
		},
		
		discount: {
			type: Number,
			required: true,
			trim: true,
		},

	
		des: {
			type: String,
			required: true,
		},
		userid:{
            type:String,
            required:true,
            
        }
		
	},
	
);

module.exports = mongoose.model("medicine", medicineSchema);