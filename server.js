const express = require("express");
const app = express();
const connectDB = require("./db/mongodb");
const {
	errorHandler,
	notFound,
} = require("./middlewares/errorhandler.moddleware");
const router = require("./routes/routes");
require("dotenv").config();

app.use(express.json());

app.use("/api/v1/", router);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
	await connectDB();
	app.listen(3000, () => {
		console.log("Server is running on port 3000");
	});
};

startServer();
