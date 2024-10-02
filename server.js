const express = require("express");
const app = express();
const connectDB = require("./db/mongodb");
const cors = require("cors");
const {
	errorHandler,
	notFound,
} = require("./middlewares/errorhandler.moddleware");
const router = require("./routes/routes");
require("dotenv").config();

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

app.use("/api/v1/", router);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
	await connectDB(process.env.MONGODB_URI);
	app.listen(3000, () => {
		console.log("Server is running on port 3000");
	});
};

startServer();
