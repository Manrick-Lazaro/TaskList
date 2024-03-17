import Sequelize from "sequelize";
import database from "../config/database";

import User from "../app/models/User";

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = Sequelize(database);

        models.map((models) => models.init(this.connection));
    }
}

export default Database();
