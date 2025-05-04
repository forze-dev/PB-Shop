import mongoose from "mongoose";

async function connectMongoDB() {
	try {
		await mongoose.connect(process.env.MONGO_DB)
		console.log("Mongo DB connected");
	} catch (error) {
		console.log("Mongo DB Error:", error.message);
	}
}

export { connectMongoDB }