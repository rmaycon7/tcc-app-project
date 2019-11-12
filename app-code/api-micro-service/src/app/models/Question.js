const mongoose = require('../../database/db')
const mongoosastic = require('mongoosastic')

const QuestionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			es_indexed: true
		},
		owner: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
			required: true
		},
		answerers: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Answer',
				es_indexed: true,
				es_type: 'nested',
				es_include_in_parent: true
			}
		],
		// palavras chave sobre o assunto da pergunta
		key_words: {
			type: Array,
			default: [],
			es_indexed: true
		}
	},
	{ timestamps: true }
)

QuestionSchema.plugin(mongoosastic)

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question
