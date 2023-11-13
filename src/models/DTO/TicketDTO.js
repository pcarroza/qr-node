class TicketDTO {
  constructor() {
    this.code;
    this.name;
    this.email;
    this.status;
  }

  setCode(code) {
    this.code = code;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setStatus(status) {
    this.status = status;
    return this;
  }
}

module.exports = TicketDTO;
