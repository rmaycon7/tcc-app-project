const Question = require('../models/Question').Question
/* 
método para listar todas as perguntas salvas na base de dados
*/
const list  = async () =>{
	Question.find().then(data =>data).catch(error => error)
}
/* 
método para buscar apenas uma pergunta
*/

const get = async (id) => {
	Question.findOneById(id).then(data => {
		/*
		verifando se o retorno da função possui conteúdo, caso não possua nenhum dado indica que nenhum registro foi encontrado com o id fornecido
		*/
		if (data) {
			return data
		}
		return {
			code: 'QUESTION_NOT_FOUND',
			message:
				'Pergunta não encontrada!',
			name: 'Buscar pergunta',
			statusCode: 404
		}
	}).catch(error => error)
}
/* 
método para criar uma perguta
*/
const create  = async (payload) => {
	
	Question.insertOne(payload).then(data => data).catch(error => error)
}
/* 
método para atualizar uma pergunta 
*/
// const version_question = require('../models/Question').version_question
const update = async (id, payload) => {

	// if (payload) {
		
	// }



	Question.findOneAndUpdate(id, payload, {new: true}).then(data => {
		/*
		verifando se o retorno da função possui conteúdo, caso não possua nenhum dado indica que nenhum registro foi encontrado com o id fornecido
		*/
		if (data) {
			return data
		}
		return {
			code: 'QUESTION_NOT_FOUND',
			message:
				'Pergunta não encontrada!',
			name: 'Atualizar pergunta',
			statusCode: 404
		}
	}).catch(error => error)

}
/* 
método para remover uma pergunta
*/
const remove = async (id) => {
	Question.findOneAndRemove(id).then(data => {
		/*
		verifando se o retorno da função possui conteúdo, caso não possua nenhum dado indica que nenhum registro foi encontrado com o id fornecido 
		 */
		if (data) {
			return {
				code: 'QUESTION_DELETED',
				message:
					'Pergunta não encontrada!',
				name: 'Apagar pergunta',
				statusCode: 404
			}
		}
		return {
			code: 'QUESTION_NOT_FOUND',
			message:
				'Pergunta não encontrada!',
			name: 'Apagar pergunta',
			statusCode: 404
		}
	}).catch(error => error)
}

module.exports = {
	create, remove, update, list, get
}
