const mongoose = require('../../database/db')

const ThemeSchema = new mongoose.Schema({
	name:{
		type: String,
		unique: true
	}
}, {timestamps: true})

const Theme =  mongoose.model('Theme', ThemeSchema)

module.exports = Theme
