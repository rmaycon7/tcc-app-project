const mongoosastic = require('mongoosastic')
const mongoose = require('../../database/db')
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			es_indexed: true
		},
		email: {
			type: String,
			required: true,
			unique: false
		},
		// caminho da foto de perfil do usuario
		profile_picture_path: {
			type: String,
			default: 'public/default_use.jpg'
		},
		password: {
			require: true,
			type: String
		},
		// lista com os temas de interese do usuario
		interest_themes: {
			type: Array,
			default: []
		},
		// indica quais o temas de interesse do usuário que foram perguntados no app
		interest_themes_notifications: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Question'
			}
		],
		// indica quais as questoes o usuário respondeu
		answered_questions: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Answer'
			}
		]
	},
	{ timestamps: true }
)

UserSchema.plugin(mongoosastic)
const User = mongoose.model('User', UserSchema)

module.exports = User
