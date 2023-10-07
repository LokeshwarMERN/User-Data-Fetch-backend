const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    text:{type : String},
    ipVersion: { type: String },
    ipAddress: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    countryName: { type: String },
    timeZone: { type: String },
    zipCode: { type: String },
    cityName: { type: String },
    regionName: { type: String },
    continent: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
