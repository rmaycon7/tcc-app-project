const mongoose = require('../../database/db')
// const mongoosastic = require('mongoosastic')

const InteractionSchema = new mongoose.Schema(
	{
		belongs_to: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Answer'
		},
		user_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User'
		},
		vote:{
			type: Number,
			min: -50,
			max: 50
		}

	},
	{ timestamps: true }
)
// InteractionSchema.plugin(mongoosastic)
const Interaction = mongoose.model('Interaction', InteractionSchema)
module.exports = Interaction
