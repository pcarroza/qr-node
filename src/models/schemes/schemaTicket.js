const mongoose = require("mongoose");

const schemaTicket = new mongoose.Schema({
  code: { type: Number, required: true },
  name: String,
  email: String,
  status: { type: String, enum: ["VALID", "JOINED"], required: true },
});

const ticketModel = mongoose.model("ticket", schemaTicket);

module.exports = ticketModel;
