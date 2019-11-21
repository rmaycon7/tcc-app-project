const mongoose = require('../../database/db')
const AnswerSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
			es_indexed: true
		},
		// inidca a qual questao a respoata pertence
		belongs_to: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Question',
			required: true,
			autopopulate: true
		},
		// indica a qual usuario a resposta pertence
		owner: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
			required: true,
			autopopulate: true
			
		},
		likes: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Like',
				autopopulate: true
			}
		],
		dislikes: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Dislike',
				autopopulate: true
			}
		],
		previous_version:{
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Answer',
			default: null,
			autopopulate: true
		}
	},
	{ timestamps: true }
)

AnswerSchema.plugin(require('mongoose-autopopulate'))
const Answer = mongoose.model('Answer', AnswerSchema)
module.exports = Answer
