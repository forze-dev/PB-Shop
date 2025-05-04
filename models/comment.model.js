import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: "products",
		required: true
	},
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	score: {
		type: Number,
		required: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "clients",
		required: true
	},
	defect: {
		type: String,
		default: ""
	},
	preference: {
		type: String,
		default: ""
	}
}, { timestamps: { createdAt: true, updatedAt: false } })

const CommentModel = new model("comments", CommentSchema)

export default CommentModel


