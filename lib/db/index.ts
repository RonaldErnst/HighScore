import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import { resolve } from "path";

const database_env = process.env.NODE_ENV || "development";
if (!process.env.MONGODB_HOST) {
	throw new Error(`Please add your Mongo URI to .env.${database_env}.local`);
}

const credentials = resolve("config/db-cert-X509.pem");
const options: mongoose.ConnectOptions = {
	sslKey: credentials,
	sslCert: credentials,
	authMechanism: "MONGODB-X509",
	retryWrites: true,
	w: "majority",
	authSource: "$external",
};

const mongoHost = process.env.MONGODB_HOST as string;
const uri = `mongodb+srv://${mongoHost}/HighScore_${database_env}`;

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
async function connectToDatabase() {
	return await mongoose.connect(uri, options);
}

export { connectToDatabase };
export { default as UserModel } from "./users";
export * from "./users";
