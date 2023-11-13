const Ticket = require("../models/Ticket");

const ticket = new Ticket();

exports.updateStatusTicket = (req, res) => ticket.updateStatusTicket(req, res);

exports.createTicket = (req, res) => ticket.create(req, res);

exports.validate = (req, res) => ticket.validate(req, res);

exports.findTicketStatusByCode = (req, res) =>
  ticket.findTicketStatusByCode(req, res);

exports.findTickets = (req, res) => ticket.findTickets(req, res);

exports.deleteTicket = (req, res) => ticket.deleteTicket(req, res);
