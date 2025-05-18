import MetaClientsModel from "../models/metaClient.model.js"
import { hashMeta, hashData } from "../utils/hash.js"
import { cryptoData } from "../utils/crypto.js"
import ClientModel from "../models/client.model.js"
import { clearUser } from "../utils/clearUser.js"

const createClientAccount = async ({ name, lastname, email, phone, password }) => {
	try {
		const em = hashMeta(email)

		const metaInfo = await MetaClientsModel.findOne({ em }).populate({ path: 'client', select: '-password' });

		if (metaInfo) return { isNewClient: false, client: metaInfo.client }

		if (!password) password = "1111"

		const newClient = new ClientModel({
			name,
			lastname,
			email: cryptoData(email),
			phone,
			password: hashData(password)
		})

		const newMeta = new MetaClientsModel({
			client: newClient._id,
			em
		})

		await newClient.save()
		await newMeta.save()

		return { isNewClient: true, client: clearUser(newClient) }
	} catch (error) {
		throw error
	}
}

export { createClientAccount }