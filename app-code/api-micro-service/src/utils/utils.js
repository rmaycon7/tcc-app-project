module.exports = {
	set_root_user: () => {
		const User = require('../app/models/User')
		/*
		checando se já existe um usuário root  cadastrado no sistema
		 */
		User.find({root_key: require('../config/auth.json').secret}, async  (error,data) =>{
			// console.log({data})
			// console.log({error})
			if (data.length === 0){
				User.create({
					name:  'root',
					password: require('../config/auth.json').secret,
					email: 'root@local',
					root_key: require('../config/auth.json').secret
				}, (error, data)=>{
					return {error,data}
				})
				
			}
			
		})
	}
}
