const mongoosastic = require('mongoosastic')
const mongoose = require('../../database/db')
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		profile_picture_path: {
			type: String,
			default: 'public/default_use.jpg'
		}
	},
	{ timestamps: true }
)

UserSchema.plugin(mongoosastic)
const User = mongoose.model('User', UserSchema)

module.exports = User
