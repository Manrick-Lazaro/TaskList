require("dotenv").config();

module.exports = {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	define: {
		timestamps: true,
		underscored: true, // nome tabele user_id
		underscoredAll: true, // nome relacionamento
	},
};

module.exports = {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	define: {
		timestamps: true,
		underscored: true, // nome tabele user_id
		underscoredAll: true, // nome relacionamento
	},
};