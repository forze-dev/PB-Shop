import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";

function hashData(string) {
	const salt = bcrypt.genSaltSync(5);
	const hash = bcrypt.hashSync(string, salt);
	return hash
}

function compareData(string, hashedString) {
	return bcrypt.compareSync(string, hashedString);
}

function hashMeta(string) {
	const hmac = CryptoJS.HmacSHA256(string, process.env.HASH_SECRET)
	return hmac.toString(CryptoJS.enc.Hex)
}

export { hashData, compareData, hashMeta }

