import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	createDate: Date;
	lastOnline: Date;
	avatar?: string;
	role: string;
}

export const UserSchema: Schema = new Schema<IUser>({
	username: {
		type: String,
		lowercase: true,
		required: [true, "can't be blank"],
		match: [/^[a-zA-Z0-9]+$/, "is invalid"],
		minlength: 5,
		maxlength: 20,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		lowercase: true,
		required: [true, "can't be blank"],
		match: [/\S+@\S+\.\S+/, "is invalid"],
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: [true, "can't be blank"],
	},
	createDate: { type: Date, required: true, default: Date.now },
	lastOnline: { type: Date, required: true, default: Date.now },
	avatar: { type: String },
	role: { type: String, enum: ["User", "Admin"], required: true },
});

export default models.User || model<IUser>("User", UserSchema);