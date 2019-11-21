const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tcc-project-1', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
mongoose.Promise = global.Promise

module.exports = mongoose
