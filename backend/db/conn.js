const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected !")
    }
    catch(err){
        console.log("DB not connected", err);
    }
}

// connectToDatabase();

module.exports = {connectToDatabase};