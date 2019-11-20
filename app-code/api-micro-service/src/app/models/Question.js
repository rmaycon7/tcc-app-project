const mongoose = require('../../database/db')
const mongoosastic = require('mongoosastic')
const mexp = require('mongoose-elasticsearch-xp')


const VersionQuestionSchema = new mongoose.Schema({
	title: String,
	key_words: [{ type: String }]
}, {timestamps: true})

const version_question = mongoose.model('QuestionVersion', VersionQuestionSchema)

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
		},
		previous_version:{
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Question',
			default: null
		},
		version: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'QuestionVersion'
			}
		]
	},
	{ timestamps: true }
)

// QuestionSchema.plugin(mongoosastic)

QuestionSchema.plugin(mexp, { hosts: ['10.8.231.50:9200'] })
const Question = mongoose.model('Question', QuestionSchema)

module.exports = { Question, version_question }
