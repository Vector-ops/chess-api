const Streamer = require("../models/streamer.model");

const getStreamers = async (req, res) => {
    try {
        const streamers = await Streamer.find(); // Fetch all streamers from DB
        res.status(200).json(streamers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch streamers" });
    }
};

module.exports = { getStreamers };
