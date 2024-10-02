const Player = require("../models/player.model");

const getPlayerInfo = async (req, res) => {
    const { fide_id } = req.query; 
    try {
        if (!fide_id) {
            return res.status(400).json({ message: "fide_id is required" });
        }

        const player = await Player.findOne({ fide_id }); // Fetch player by fide_id

        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }

        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch player info" });
    }
};

module.exports = { getPlayerInfo };
