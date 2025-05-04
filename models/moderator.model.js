import { Schema, model } from "mongoose";

const ModeratorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
}, { timestamps: true })

const ModeratorModel = new model("moderators", ModeratorSchema)

export default ModeratorModel



