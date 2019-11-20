const User = require('../models/User')
const responses = require('../../config/errors_response')
const list = async () =>{
	return User.find().then(data => {
		let aux = data
		data = {
		}
		data.data = aux
		data.statusCode = 200
		return data
	}).catch(error => {
		error.statusCode = 500
		return error
	})
}

const get = async (id) =>{
	return User.findById(id).then(data =>{
		/*
		verifando se o retorno da função possui conteúdo, caso não possua nenhum dado indica que nenhum registro foi encontrado com o id fornecido
		*/
		if (data) {
			data.statusCode = 200
			return data
		}
		return responses.user_not_found
	}).catch(error => {
		error.statusCode = 500
		return error
	})
}

const create = async (payload) => {
	console.log(payload);
	// User.
	const user = new User(payload)

	return user.save().then(data =>{
		user.on('es-indexed', function(err, res) {
			if (err) {
				console.log({ err: err })
			}
			console.log({ res: res })

			// if (err) throw err
			/* Docuemnt is unindexed */
		})
		data.statusCode = 200
		return data
	}).catch(error => {
		error.statusCode = 500
		return error
	})
}

const update = async (id,payload) =>{
	return User.findOneAndUpdate(id, payload, {new:true}).then(data =>{
		if (data) {
			data.statusCode = 200
			return data
		}
		return responses.user_not_found
	}).catch(error => {
		error.statusCode = 500
		return error
	})
}

const remove = async (id) =>{
	return User.findOneAndRemove(id).then(data => {
		/*
		verifando se o retorno da função possui conteúdo, caso não possua nenhum dado indica que nenhum registro foi encontrado com o id fornecido
		*/
		if (data) {
			return {
				code: 'USER_DELETED',
				message:
					'Usuário deletado com sucesso.',
				name: 'Deletar usuário',
				statusCode: 200
			}
		}
		return responses.user_not_found
	}).catch(error => {
		error.statusCode = 500
		return error
	})
}

module.exports = {
	list,remove, create, get, update
}
