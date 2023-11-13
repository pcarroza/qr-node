const express = require("express");
const router = express.Router();
const validateCode = require("../middleware/validateCode");

const ticketController = require("../controllers/controller");

router.post("/ticket", ticketController.createTicket);

router.get("/validate/:code", ticketController.validate);

router.put(
  "/update-ticket/:code",
  validateCode,
  ticketController.updateStatusTicket
);

router.get(
  "/find-status-ticket/:code",
  ticketController.findTicketStatusByCode
);

router.get("/tickets", ticketController.findTickets);

module.exports = router;
