const express = require("express");
const cors = require("cors");
const dbOperation = require("./dbFiles/dbOperation");
const bodyParser = require("body-parser");

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

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
        const isValidUser = await dbOperation.checkCredentials(usernameOrEmail, password);
        if (isValidUser) {
            res.status(200).send("Login successful!");
        } else {
            res.status(401).send("Invalid credentials!");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error logging in!");
    }
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}...`));
