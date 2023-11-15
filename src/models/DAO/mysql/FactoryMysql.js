const TicketDAO = require("./TicketDAO");

class FactoryMysql {
	getTicketDAO() {
		return new TicketDAO();
	}
}

module.exports = FactoryMysql;
