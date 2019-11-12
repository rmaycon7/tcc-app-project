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
			required: true
		},
		// indica a qual usuario a resposta pertence
		owner: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
			required: true
		},
		likes: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Like'
			}
		],
		dislikes: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Dislike'
			}
		]
	},
	{ timestamps: true }
)

const Answer = mongoose.model('Answer', AnswerSchema)
module.exports = Answer
