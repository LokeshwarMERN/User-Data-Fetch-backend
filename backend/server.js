
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors());
const { connectToDatabase } = require("./db/conn");
const { User } = require('./model/QrVisitUser');
connectToDatabase();
// Middleware to parse JSON data
const PORT = process.env.PORT || 5000;



app.post('/api/user-qrcode', async (req, res) => {
    try {

        const { ipVersion,
            ipAddress, latitude, longitude, countryName, countryCode,
            timeZone, zipCode, cityName, regionName, continent } = req.body;

        if (!ipVersion ||
            !ipAddress || !latitude || !longitude || !countryName || !countryCode ||
            !timeZone || !zipCode || !cityName || !regionName || !continent) {
            // Respond with a 400 Bad Request status and an error message
            res.status(400).json({ message: "Fill all fields" });
        }
        const NewUser = await User.create({
            ipVersion, ipAddress, latitude, longitude, countryName,
            countryCode, timeZone, zipCode, cityName, regionName, continent
        });

        console.log("User data stored");
        res.status(201).json({ message: "Data stored successfully!" });

    } catch (err) {
        console.error("Error to save in db:", err);
        // Send an error response to the client
        res.status(500).json({ error: "Unable to save user data" });
    }
})

app.listen(PORT, () => {
    console.log(`Listen in PORT : ${PORT}`);
});