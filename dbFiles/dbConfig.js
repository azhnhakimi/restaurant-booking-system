require("dotenv").config(); // Load environment variables from .env file

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER,
	database: process.env.DB_DATABASE,
	options: JSON.parse(process.env.DB_OPTIONS),
	port: parseInt(process.env.DB_PORT),
};

module.exports = config;
