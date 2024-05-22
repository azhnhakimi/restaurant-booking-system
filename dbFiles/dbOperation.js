const sql = require("mssql");
const config = require("./dbConfig");

const logLoginActivity = async (customerID) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query(
            `INSERT INTO LoginAuditTrail (CustomerID, LoginTime) VALUES (${customerID}, GETDATE())`
        );
        return result;
    } catch (e) {
        console.log(e);
    }
};

const createCustomer = async (Customer) => {
	try {
		let pool = await sql.connect(config);
		let newCustomer = await pool.request().query(
			`INSERT INTO Customers (fullname, username, email, contactNumber, password) VALUES
            (
                '${Customer.fullname}', '${Customer.username}', '${Customer.email}', '${Customer.contactNumber}', '${Customer.password}'
            )`
		);
		return newCustomer;
	} catch (e) {
		console.log(e);
	}
};

const createReservation = async (formData, customerID) => {
	try {
		let pool = await sql.connect(config);
		let result = await pool.request().query(
			`INSERT INTO Reservations (CustomerID, ReserveeName, ReservationDate, ReservationTime, ContactNumber, Email, NumberOfPax) VALUES
			(
				${customerID}, '${formData.name}', '${formData.reservationDate}', '${formData.reservationTime}', '${formData.contactNumber}', '${formData.email}', '${formData.numberOfPax}'
			)`
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};

const getCustomerReservations = async (customerID) => {
	try {
		let pool = await sql.connect(config);
		let result = await pool.request().query(
			`SELECT * FROM Reservations WHERE CustomerID = ${customerID}
			`
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};

const getAllCustomerReservations = async () => {
	try {
		let pool = await sql.connect(config);
		let result = await pool.request().query(`SELECT * FROM Reservations`);
		return result;
	} catch (e) {
		console.log(e);
	}
};

const deleteReservation = async (reservationID, customerID) => {
	try {
		let pool = await sql.connect(config);
		let result = await pool.request().query(
			`DELETE FROM Reservations WHERE CustomerID = ${customerID} AND ReservationID = ${reservationID}
			`
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};

const getCustomerID = async (usernameOrEmail, password) => {
	try {
		let pool = await sql.connect(config);
		let result = await pool
			.request()
			.query(
				`SELECT CustomerID FROM Customers WHERE (username = '${usernameOrEmail}' OR email = '${usernameOrEmail}') AND password = '${password}'`
			);
		return result.recordset[0].CustomerID;
	} catch (e) {
		console.log(e);
		return false;
	}
};

const checkCredentials = async (usernameOrEmail, password) => {
	try {
		let pool = await sql.connect(config);
		let result = await pool
			.request()
			.query(
				`SELECT * FROM Customers WHERE (username = '${usernameOrEmail}' OR email = '${usernameOrEmail}') AND password = '${password}'`
			);
		return result.recordset.length > 0;
	} catch (e) {
		console.log(e);
		return false;
	}
};

module.exports = {
	logLoginActivity,
	createCustomer,
	checkCredentials,
	getCustomerID,
	createReservation,
	getCustomerReservations,
	deleteReservation,
	getAllCustomerReservations,
};
