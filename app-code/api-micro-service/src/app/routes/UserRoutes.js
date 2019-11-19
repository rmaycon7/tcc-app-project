const express = require('express')
const routes = express.Router()
const UserControl = require('../controllers/UserController')
 
routes.get('/', async (req, res, next) => {
	const data = await UserControl.list()
	res.status(data.statusCode).json(data)
})

routes.get('/:id', async (req, res, next) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})

routes.post('/', async (req, res, next) => {
	const data = await UserControl.create(req.body)
	res.status(data.statusCode).json(data)
})

routes.patch('/:id', async (req, res, next) => {
	const data = await UserControl.create(req.params.id,req.body)
	res.status(data.statusCode).json(data)
})

routes.delete('/:id', async (req, res, next) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})

module.exports = app => app.use('/user', routes)
