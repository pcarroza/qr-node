const mongoose = require("mongoose");

connectDB = (URI) => {
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log("BASE DE DATOS CONNECTADA..."))
    .catch((error) => console.log("Error al conectarse a la BD" + error));
};

module.exports = connectDB;
