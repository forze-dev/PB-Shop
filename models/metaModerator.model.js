import { Schema, model } from "mongoose";

const MetaModeratorsSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: "moderators",
		required: true
	},
	em: {
		type: String,
		required: true
	}
}, { timestamps: true })

const MetaModeratorsModel = new model("meta-moderators", MetaModeratorsSchema)

export default MetaModeratorsModel
