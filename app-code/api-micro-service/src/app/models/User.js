const mongoosastic = require('mongoosastic')
const mongoose = require('../../database/db')
const UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		age: Number
	},
	{ timestamp: true }
)
UserSchema.plugin(mongoosastic)
const User = mongoose.model('User', UserSchema)

module.exports = User
