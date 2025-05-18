import { Schema, model } from "mongoose";

const ClientSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
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
	},
	score: {
		type: Number,
		default: 0
	},
	orders: {
		type: [Schema.Types.ObjectId],
		ref: "orders",
		default: []
	},
	comments: {
		type: [Schema.Types.ObjectId],
		ref: "comments",
		default: []
	}
}, { timestamps: true })

const ClientModel = new model("clients", ClientSchema)

export default ClientModel

