import { Schema, model } from "mongoose";

const ProductCharacteristicSchema = new Schema({
	label: {
		type: String,
		required: true
	},
	value: {
		type: String,
		required: true
	}
})

const ProductActionSchema = new Schema({
	type: {
		type: String,
		required: true
	},
	info: {
		type: String,
		required: true
	},
	moderator: {
		type: Schema.Types.ObjectId,
		ref: "moderators",
		required: true
	}
}, { timestamps: { createdAt: true, updatedAt: false } })

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	tags: {
		type: [String],
		default: []
	},
	category: {
		type: String,
		required: true,
	},
	subCategory: {
		type: String,
		required: true,
	},
	characteristics: {
		type: [ProductCharacteristicSchema],
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "moderators",
		required: true
	},
	actions: {
		type: [ProductActionSchema],
		required: true,
	},
	comments: {
		type: [Schema.Types.ObjectId],
		ref: "comments",
		default: []
	},
	images: {
		type: [String],
		default: []
	},
	price: {
		type: Number,
		required: true,
	},
	discount: {
		type: Number,
		default: 0
	}
}, { timestamps: true })

const ProductModel = new model("products", ProductSchema)

export default ProductModel