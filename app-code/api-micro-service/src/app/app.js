const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(bodyParser.json())

const User = require('./models/User')
const options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html', 'gif'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function(res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
}
// console.log(path.resolve(__dirname, '../..', 'public'))

app.use(express.static(path.resolve(__dirname, '../..', 'static')))
app.get('*', (req, res, next) => {
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
