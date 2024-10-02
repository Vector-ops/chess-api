const express = require("express");
const { getTopPlayers } = require("../controllers/player.controller");
const { getStreamers } = require("../controllers/streamer.controller");
const { getPlayerInfo } = require("../controllers/playerinfo.controller");

const router = express.Router();

router.route("/top_players").get(getTopPlayers);
router.route("/streamers").get(getStreamers);
router.route("/players_info").get(getPlayerInfo);

module.exports = router;
