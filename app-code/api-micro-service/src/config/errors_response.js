/* Alguns erros muito comuns, como campos (fields )faltando, erro interno no servidor, etc ...
Para aginilar nas repostas, bastando apenas importar este arquivo e usar os valoeres nele contido.*/
module.exports = {
	fields_not_found: {
		code: 'FIELDS_NULL',
		fields: [],
		message:
			'Estes campos são obrigatórios, preencha os campos e tente novamente.',
		name: 'Cadastrar ou atualizar dados.',
		statusCode: 428
	},
	headers_not_found: {
		code: 'HEADERS_NOT_FOUND',
		headers: [],
		message:
			'Estes cabeçalhos são obrigatórios, preencha os cabeçalhos e tente novamente.',
		name: 'Cabeçalhos incorretos',
		statusCode: 412
	},
	internal_error: {
		code: 'INTERNAL_ERROR',
		message: 'Erro interno no servidor, por favor tente novamente.',
		name: 'Erro interno',
		statusCode: 500
	},
	not_authorized: {
		code: 'AUTHORIZATION_REQUIRED',
		message:
			'Autorização Necessária, Token de autênticação válido é requerido.',
		name: 'Token inválido',
		statusCode: 401
	},
	password_wrong: {
		code: 'PASSWORD_INCORRECT',
		message: 'Senhas não conferem, corriga e tente novamente',
		name: 'Error',
		statusCode: 401
	},
	resource_not_found: {
		code: 'ROUTE_INCORRECT',
		message: '',
		name: '',
		statusCode: 404
	},
	unauthorized: {
		code: 'NOT_AUTHORIZED',
		message: 'Usuário não esta autorizado a acessar esses dados.',
		name: 'Vizualizar dados do usuário.',
		statusCode: 401
	},
	user_already_exists: {
		code: 'USER_EXISTS',
		message: 'Usuário já existe, mude o email e tente novamente.',
		name: 'Error',
		statusCode: 409
	},
	user_not_found: {
		code: 'USER_ID_INCORRECT',
		message:
			'Usuário não encontrado, verifique o Id fornecido e tente novamente.',
		name: 'Usuário nã encontrado',
		statusCode: 404
	},
	users_not_found: {
		code: 'NO_USERS_FOUND',
		message: 'Nenhum usuário encontrado, tente novamente.',
		name: 'No Users Found',
		statusCode: 404
	},

	user_is_gone: {
		code: 'USER_IS_GONE',
		message: 'O usuário não existe mais, tente novamente.',
		name: 'User removed',
		statusCode: 410
	},
	file_not_found: {
		code: 'FILE_NOT_FOUND',
		message:
			'Arquivo não encontrado, verifique o id fornecido e tente novamente.',
		name: 'Download de Arquivo',
		statusCode: 404
	}
}
