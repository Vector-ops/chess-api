const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
	fide_id: {
		type: String,
		required: true,
	},
	fide_title: {
		type: String,
		required: true,
	},
	federation: {
		type: String,
		required: true,
	},
	birth_year: {
		type: Number,
		required: true,
	},
	sex: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	word_rank_all: {
		type: Number,
		required: true,
	},
	world_rank_active: {
		type: Number,
		required: true,
	},
	continental_rank_all: {
		type: Number,
		required: true,
	},
	continental_rank_active: {
		type: Number,
		required: true,
	},
	national_rank_all: {
		type: Number,
		required: true,
	},
	national_rank_active: {
		type: Number,
		required: true,
	},
	history: {
		type: Array,
		required: true,
		default: [],
	},
});

const Player = mongoose.model("players", playerSchema);

module.exports = Player;
