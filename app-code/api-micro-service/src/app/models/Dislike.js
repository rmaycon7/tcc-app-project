const mongoose = require('../../database/db')
const mongoosastic = require('mongoosastic')

const DislikeSchema = new mongoose.Schema(
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
// DislikeSchema.plugin(mongoosastic)
const Dislike = mongoose.model('Dislike', DislikeSchema)
module.exports = Dislike
