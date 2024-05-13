const config = require("./dbConfig");
const sql = require("mssql");

const createCustomer = async (Customer) => {
	try {
		let pool = await sql.connect(config);
		let newCustomer = pool.request().query(
			`INSERT INTO Customers VALUES
            (
                '${Customer.fullname}', '${Customer.username}', '${Customer.email}', '${Customer.contactNumber}','${Customer.password}'
            )
            `
		);
		return newCustomer;
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	createCustomer,
};
