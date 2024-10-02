const mongoose = require("mongoose");

const topPlayerSchema = new mongoose.Schema({
	rank: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	fide_id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	rating: {
		type: String,
		required: true,
	},
	games: {
		type: String,
		required: true,
	},
	birth_year: {
		type: String,
		required: true,
	},
});

const TopPlayer = mongoose.model("top_player", topPlayerSchema);

module.exports = TopPlayer;
