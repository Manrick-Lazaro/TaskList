import Sequelize from "sequelize";
import database from "../config/database";

import User from "../app/models/User";
import Task from "../app/models/Task";

const models = [User, Task];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(database);

		models
			.map((models) => models.init(this.connection))
			.map((models) => models.associate?.(this.connection.models));
	}
}

export default new Database();
