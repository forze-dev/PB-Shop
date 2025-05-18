import CryptoJS from "crypto-js";

function cryptoData(string) {
	return CryptoJS.AES.encrypt(string, process.env.CRYPTO_SECRET).toString();
}

function decryptData(cryptoString) {
	const bytes = CryptoJS.AES.decrypt(cryptoString, process.env.CRYPTO_SECRET);
	return bytes.toString(CryptoJS.enc.Utf8);
}

export { cryptoData, decryptData }

