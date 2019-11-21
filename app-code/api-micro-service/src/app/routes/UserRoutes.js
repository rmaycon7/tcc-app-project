const express = require('express')
const router = express.Router()
const UserControl = require('../controllers/UserController')
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/auth')
const authConfig = require('../../config/auth.json')
const multer = require('multer')
// const root_user ={
// 	name:'root',
// 	email: 'root@root',
// 	root_key: '3f4caafe5e21d73a2246bad91a1f89b5'
// }

let storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'static/public/')
	},
	filename: function(req, file, cb) {
		console.log(`file.fieldname + \'-\' + ${Date.now()}`)

		cb(null, file.fieldname + '-' + Date.now())
	}
})
const upload = multer({
	// dest: 'static/public',
	storage: storage
})

function generateToken(params = {}) {
	return jwt.sign(params, authConfig.secret, {
		expiresIn: 86400
	})
}

router.get('/', async (req, res) => {
	const data = await UserControl.list()
	// console.log({data});

	res.status(data.statusCode).json(data)
})

router.get('/:id', auth, async (req, res) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})

router.post('/', async (req, res) => {
	const { email, name, password, interest_themes } = req.body
	const data = await UserControl.create({
		email,
		name,
		password,
		interest_themes
	})
	// console.log({data})
	// data.token =  generateToken({
	// 	id: data.id
	// })
	// console.log({data:data.token, tk: generateToken({id: data._id})})
	// require('../../utils/utils').set_root_user()

	/* 
	verificando se houve um erro interno, com por exemplo: um email duplicado
	*/
	if (data.statusCode !== 500) {
		return res.status(data.statusCode).json({
			...data._doc,
			token: generateToken({
				id: data.id
			})
		})
	} else {
		res.status(data.statusCode).json(data)
	}
})

router.put('/:id', auth, async (req, res) => {
	const { email, name, password, interest_themes } = req.body
	const data = await UserControl.update(req.params.id, {
		email,
		name,
		password,
		interest_themes
	})

	res.status(data.statusCode).json(data)
})

router.delete('/:id', auth, async (req, res) => {
	const data = await UserControl.get(req.params.id)
	res.status(data.statusCode).json(data)
})

router.post('/picture', auth, async (req, res) => {})

module.exports = app => app.use('/users', router)
