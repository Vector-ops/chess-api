const TopPlayer = require("../models/topplayers.model.js");

const getTopPlayers = async (req, res) => {
    try {
        const topPlayers = await TopPlayer.find(); // Fetch all top players from DB
        res.status(200).json(topPlayers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch top players" });
    }
};

module.exports = { getTopPlayers };
