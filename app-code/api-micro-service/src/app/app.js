const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(bodyParser.json())

// const User = require('./models/User')
/* 
cadastra um usuário root no sistem caso ainda não exista um cadastrado
*/
require('../utils/utils').set_root_user()

app.use(require('morgan')('dev'))

// const options = {
// 	dotfiles: 'ignore',
// 	etag: false,
// 	extensions: ['htm', 'html', 'gif'],
// 	index: false,
// 	maxAge: '1d',
// 	redirect: false,
// 	setHeaders: function(res, path, stat) {
// 		res.set('x-timestamp', Date.now())
// 	}
// }
// console.log(path.resolve(__dirname, '../..', 'public'))

app.use(express.static(path.resolve(__dirname, '../..', 'static')))
// const Question = require('./models/Question')
// const Answer = require('./models/Answer')

require('./routes')(app)




// User.on()
// User.createMapping(function(err, mapping) {
// 	if (err) {
// 		console.log('error creating mapping (you can safely ignore this)')
// 		console.log(err)
// 	} else {
// 		console.log('mapping created!')
// 		console.log(mapping)
// 	}
// })
/* app.get('*', async (req, res, next) => {
	// User.esSearch({
	// 	query_string: {
	// 		query: req.query.query
	// 	}
	// }).then(function(results) {
	// 	// results here
	// 	res.json(results)
	// })
	// User.search(
	// 	{
	// 		query_string: {
	// 			query: 'test'
	// 		}
	// 	},
	// 	function(err, results) {
	// 		// results here
	// 		console.log(results)
	// 		res.json(results)
	// 	}
	// )
	// User.find(async (error, data) => {
	// 	const data1 = await Answer.find()
	// 	const data2 = await Question.find()
	// 	res.json({ data, data1, data2 })
	// })
	// res.json({
	//   msg: "ok"
	// })
}) */

// app.post('*', (req, res) => {
// 	console.log(req.body)
// 	const user = new User(req.body)
// 	console.log(user)
// 	// user.save
// 	// User.create(req.body (error, data) => {
// 	user.save((error, data) => {
// 		console.log(error)
// 		console.log(data)

// 		user.on('es-indexed', function(err, res) {
// 			if (err) {
// 				console.log({ err: err })
// 			}
// 			console.log({ res: res })

// 			// if (err) throw err
// 			/* Docuemnt is unindexed */
// 		})
// 		res.json(data)
// 	})

// 	// res.json({
// 	//   msg: "ok"
// 	// })
// })

module.exports = app
