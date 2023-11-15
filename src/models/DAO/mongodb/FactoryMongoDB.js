const TicketDAO = require("./TicketDAO");

class FactoryMongoDB {
	getTicketDAO() {
		return new TicketDAO();
	}
}

module.exports = FactoryMongoDB;
