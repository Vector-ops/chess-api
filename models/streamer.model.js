const mongoose = require("mongoose");

const StreamerSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		required: true,
	},
	twitch_url: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	is_live: {
		type: Boolean,
		required: true,
	},
	is_community_streamer: {
		type: Boolean,
		required: true,
	},
	platforms: {
		type: Array,
		required: true,
		default: [],
	},
});

module.exports = mongoose.model("streamers", StreamerSchema);
