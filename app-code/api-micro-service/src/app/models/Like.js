const mongoose = require('../../database/db')
// const mongoosastic = require('mongoosastic')

const LikeSchema = new mongoose.Schema(
	{
		belongs_to: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Answer'
		},
		user_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
)
// LikeSchema.plugin(mongoosastic)
const Like = mongoose.model('Like', LikeSchema)
module.exports = Like
