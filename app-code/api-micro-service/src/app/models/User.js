const mongoosastic = require('mongoosastic')
const mongoose = require('../../database/db')
const mexp = require('mongoose-elasticsearch-xp')
const mongooseBcrypt = require('mongoose-bcrypt')
const version = require('mongoose-version')
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			es_indexed: true
			// default: ''
		},
		email: {
			type: String,
			required: true,
			unique: false
		},
		// caminho da foto de perfil do usuario
		profile_picture_path: {
			type: String,
			default: 'public/default_user.png'
		},
		password: {
			require: true,
			type: String,
			bcrypt: true
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
		questions_answerers: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'Answer'
			}
		]
	},
	{ timestamps: true }
)

// UserSchema.plugin(version)
// UserSchema.plugin(mongoosastic)
UserSchema.plugin(mexp,{hosts:[
	'10.8.231.50:9200'
]})
UserSchema.plugin(mongooseBcrypt)
const User = mongoose.model('User', UserSchema)

module.exports = User
