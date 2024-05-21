const express = require("express");
const cors = require("cors");
const dbOperation = require("./dbFiles/dbOperation");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(
	cors({
		origin: "http://localhost:3000", // Your React app origin
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/registerCustomer", async (req, res) => {
	const { fullname, username, email, contactNumber, password } = req.body;
	try {
		await dbOperation.createCustomer({
			fullname: fullname,
			username: username,
			email: email,
			contactNumber: contactNumber,
			password: password,
		});
		res.status(200).send("Customer registered successfully!");
	} catch (error) {
		console.log(error);
		res.status(500).send("Error registering customer!");
	}
});

app.post("/api/loginCustomer", async (req, res) => {
	const { usernameOrEmail, password } = req.body;
	try {
		const isValidUser = await dbOperation.checkCredentials(
			usernameOrEmail,
			password
		);
		if (isValidUser) {
			const customerID = await dbOperation.getCustomerID(
				usernameOrEmail,
				password
			);
			res.cookie("customerID", customerID);
			res.status(200).send("Login successful!");
		} else {
			res.status(401).send("Invalid credentials!");
			console.log("Login failed!");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error logging in!");
	}
});

app.post("/api/createReservation", async (req, res) => {
	const formData = req.body;
	const customerID = req.cookies.customerID;

	if (customerID) {
		try {
			await dbOperation.createReservation(formData, customerID);
			res.status(200).send("Reservation made!");
			console.log("Reservation made!");
		} catch (e) {
			console.log(e);
		}
	} else {
		console.log("No user logged in!");
	}
});

app.get("/api/getCustomerData", async (req, res) => {
	const customerID = req.cookies.customerID;
	try {
		const result = await dbOperation.getCustomerReservations(customerID);
		res.send({ customerData: result.recordset });
	} catch (e) {
		console.log(e);
	}
});

app.get("/api/getAllReservations", async (req, res) => {
	try {
		const result = await dbOperation.getAllCustomerReservations();
		res.send({ customerData: result.recordset });
	} catch (e) {
		console.log(e);
	}
});

app.post("/api/deleteReservation", async (req, res) => {
	const { reservationID, customerID } = req.body;
	try {
		await dbOperation.deleteReservation(reservationID, customerID);
	} catch (e) {
		console.log(e);
	}
});

app.listen(API_PORT, () =>
	console.log(`Server running on port ${API_PORT}...`)
);
