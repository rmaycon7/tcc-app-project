const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(bodyParser.json())

const User = require('./models/User')
User.app.get('*', (req, res, next) => {
	User.find((error, data) => {
		res.json(data)
	})
	// res.json({
	//   msg: "ok"
	// })
})

app.post('*', (req, res, next) => {
	console.log(req.body)

	User.create(req.body, (error, data) => {
		res.json(data)
	})

	// res.json({
	//   msg: "ok"
	// })
})

module.exports = app
