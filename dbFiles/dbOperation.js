const sql = require("mssql");
const config = require("./dbConfig");

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

const checkCredentials = async (usernameOrEmail, password) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query(
            `SELECT * FROM Customers WHERE (username = '${usernameOrEmail}' OR email = '${usernameOrEmail}') AND password = '${password}'`
        );
        return result.recordset.length > 0;
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports = {
    createCustomer,
    checkCredentials,
};
