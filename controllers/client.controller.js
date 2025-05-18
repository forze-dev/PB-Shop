import { createClientAccount } from "../services/auth.service.js";

const register = async (req, res) => {
	try {
		if (!req.body) return res.status(400).json({ result: false, message: "Missing required fields: name, lastname, email, phone" })

		let { name, lastname, email, phone, password } = req.body

		if (!name || !lastname || !email || !phone) return res.status(400).json({ result: false, message: "Missing fields..." })

		const result = await createClientAccount({ name, lastname, email, phone, password })

		if (!result.isNewClient) return res.status(403).json({ result: false, message: "This email already exist..." })

		res.status(201).json({ message: "Client was created", result: true, data: result })
	} catch (error) {
		console.log("[ERROR] -", error.message);
		res.status(500).json({ message: "Server error", result: false })
	}
}

// const login

// const verify

// GET /verify     =>>>>   checkToken, verify

export { register }

