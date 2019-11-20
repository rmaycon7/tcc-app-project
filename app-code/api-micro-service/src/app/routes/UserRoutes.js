const express = require('express')
const router = express.Router()
const UserControl = require('../controllers/UserController')

 
router.get('/', async (req, res) => {
	const data = await UserControl.list()
	// console.log({data});
	
	res.status(data.statusCode).json(data)
})

router.get('/:id', async (req, res) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})

router.post('/', async (req, res) => {
	const data = await UserControl.create({...req.body})
	res.status(data.statusCode).json(data)
})

router.patch('/:id', async (req, res) => {
	const data = await UserControl.create(req.params.id,req.body)
	res.status(data.statusCode).json(data)
})

router.delete('/:id', async (req, res) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})



module.exports = app => app.use('/users', router)
