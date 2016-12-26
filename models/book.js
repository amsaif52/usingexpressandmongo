var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: {type: String, unique: true},
	author: {type: String, unique: true},
	category: {type: String, unique: true}
});

module.exports = mongoose.model('Book',BookSchema);