const express = require("express");

const router = express.Router();

router.route("/top_players").get();
router.route("/streamers").get();
router.route("/players_info").get();

module.exports = router;
