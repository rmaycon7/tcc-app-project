const mongoose =  require('../../database/db')

const ModeratorSchema= new mongoose.Schema({
	is_moderator: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'User',
		required: true
	}
})


const Moderator = mongoose.model('Moderator', ModeratorSchema)

module.exports = Moderator
