import { Schema, model } from "mongoose";

const OrdersDeliverySchema = new Schema({
	address: {
		type: String,
		required: true
	},
	warehouseNumber: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
})

const OrdersProductSchema = new Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: "products",
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	totalPrice: {
		type: Number,
		required: true
	}
})

const OrderSchema = new Schema({
	products: {
		type: [OrdersProductSchema],
		required: true
	},
	status: {
		type: String,
		required: true
	},
	client: {
		type: Schema.Types.ObjectId,
		ref: "clients",
		required: true
	},
	fullPrice: {
		type: Number,
		required: true
	},
	deliveryInfo: {
		type: OrdersDeliverySchema,
		required: true
	}
}, { timestamps: true })

const OrderModel = new model("orders", OrderSchema)

export default OrderModel