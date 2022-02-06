import dotenv from "dotenv";
import assert from"assert";

if (process.env && process.env.NODE_ENV) {
	dotenv.config({ path: ".env." + process.env.NODE_ENV });
} else {
	dotenv.config({ path: ".env.development" });
}

const {
	HOST,
	PORT,
	HOST_URL,
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
	port: PORT,
	host: HOST,
	url: HOST_URL,
	clientCredentials: {
		apiKey: FIREBASE_API_KEY,
		authDomain: FIREBASE_AUTH_DOMAIN,
		projectId: FIREBASE_PROJECT_ID,
		storageBucket: FIREBASE_STORAGE_BUCKET,
		messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
		appId: FIREBASE_APP_ID,
	},
};
