const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")

const app = express()

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Do not start server if connection to DB fails. 
const startServer = async () => {
    try {
        await connectDB();
        app.get('/', (req, res) => {
            res.send('<body style="background-color: gray;"><h1>hello world</h1></body>')
        })
        
    } catch (error) {
        console.log(`Error with connecting to MongoDB: ${error}`)
    }
};

// Start server
startServer();