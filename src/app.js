require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(process.env.DB_URI);

app.use(cors());

app.use(express.json());

app.use("/", routes);

let public = path.join(__dirname, "../public");

app.use(express.static(public));

app.get("*", (req, res) => {
	res.sendFile(path.join(public, "index.html"));
});

app.listen(PORT, () => console.log("Servidor iniciado..."));

