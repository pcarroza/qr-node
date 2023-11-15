const FactoryMongoDB = require("./mongodb/FactoryMongoDB");
const FactoryMysql = require("./mysql/FactoryMysql");

class FactoryMethodDAO {
	constructor() {
		if (!FactoryMethodDAO.instance) {
			FactoryMethodDAO.instance = Object.freeze(this.getSingletonConfigure());
		}
	}

	getSingletonConfigure() {
		return new FactoryMongoDB();
	}

	getInstanceFactory() {
		return FactoryMethodDAO.instance;
	}
}

module.exports = FactoryMethodDAO;
