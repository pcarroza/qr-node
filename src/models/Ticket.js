const FactoryMethodDAO = require("./DAO/FactoryMethodDAO");

class Ticket {
	constructor() {
		this.ticket = new FactoryMethodDAO().getInstanceFactory().getTicketDAO();
	}

	create(req, res) {
		this.ticket.create(req, res);
	}

	deleteTicket(req, res) {
		this.ticket.deleteTicket(req, res);
	}

	validate(req, res) {
		this.ticket.validate(req, res);
	}

	findTickets(req, res) {
		this.ticket.findTickets(req, res);
	}

	updateStatusTicket(req, res) {
		this.ticket.updateStatusTicket(req, res);
	}

	findTicketStatusByCode(req, res) {
		this.ticket.findTicketStatusByCode(req, res);
	}
}

module.exports = Ticket;
