import { Schema, model } from "mongoose";

const MetaClientsSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: "clients",
		required: true
	},
	em: {
		type: String,
		required: true
	}
}, { timestamps: true })

const MetaClientsModel = new model("meta-clients", MetaClientsSchema)

export default MetaClientsModel



