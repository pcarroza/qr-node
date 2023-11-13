const TicketDAO = require("./DAO/TicketDAO");

class Ticket {
  constructor() {
    this.ticketDAO = new TicketDAO();
  }

  create(req, res) {
    this.ticketDAO.create(req, res);
  }

  deleteTicket(req, res) {
    this.ticketDAO.deleteTicket(req, res);
  }

  validate(req, res) {
    this.ticketDAO.validate(req, res);
  }

  findTickets(req, res) {
    this.ticketDAO.findTickets(req, res);
  }

  updateStatusTicket(req, res) {
    this.ticketDAO.updateStatusTicket(req, res);
  }

  findTicketStatusByCode(req, res) {
    this.ticketDAO.findTicketStatusByCode(req, res);
  }
}

module.exports = Ticket;
