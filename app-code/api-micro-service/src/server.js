const app = require('./app/app')

const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
	if (error) {
		console.log({ error: error })
	}
	console.log(`Running in http://localhost:${PORT}`)
})
