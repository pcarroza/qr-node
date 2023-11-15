const TicketModel = require("../../schemes/schemaTicket");
const TicketDTO = require("../../DTO/TicketDTO");

class TicketDAO {
	async create(req, res) {
		const { code, name, email } = req.body;
		const existingCode = await TicketModel.findOne({ code }).exec();
		if (existingCode) {
			return res.status(500).json(false);
		}
		await TicketModel.create({ code, name, email, status: "VALID" })
			.then(() => res.status(200).send(true))
			.catch(console.log);
	}

	async deleteTicket(req, res) {
		//TODO eliminar ticket...
	}

	async validate(req, res) {
		try {
			const ticket = await TicketModel.findOne({
				code: req.params.code,
				status: "VALID",
			}).exec();
			if (ticket) {
				return res.status(200).json(true);
			}
			return res.status(200).json(false);
		} catch (error) {
			return res.status(500).json(false);
		}
	}

	async updateStatusTicket(req, res) {
		await TicketModel.findOneAndUpdate(
			{ code: req.params.code },
			{ status: "JOINED" },
			{ new: true }
		)
			.then((response, updatedTicket) => {
				if (response) {
					return res.status(200).json("JOINED");
				}
				if (!updatedTicket) {
					return res.status(200).json("NOT_EXIST");
				}
				return res.status(200).json(updatedTicket);
			})
			.catch(console.log);
	}

	async findTicketStatusByCode(req, res) {
		try {
			const code = req.params.code;

			const ticket = await TicketModel.findOne({ code }, "status").exec();
			if (ticket) {
				return res.status(200).json(ticket.status);
			} else {
				return res.status(200).json("NOT_EXIST");
			}
		} catch (error) {
			return res.status(200).json("NOT_VALID");
		}
	}

	async findTickets(req, res) {
		try {
			const tickets = await TicketModel.find().exec();
			if (!tickets) {
				return res.status(200).json([]);
			}
			let ticketsDTO = tickets.map((ticket) => {
				return new TicketDTO()
					.setCode(ticket.code)
					.setName(ticket.name)
					.setEmail(ticket.email)
					.setStatus(ticket.status === "VALID" ? "VALIDADO" : "INGRESADO");
			});
			return res.status(200).json(ticketsDTO);
		} catch (error) {
			return res.status(200).json("NOT_VALID");
		}
	}
}

module.exports = TicketDAO;
