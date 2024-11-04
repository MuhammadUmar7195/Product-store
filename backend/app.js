const express = require("express");
const connectDB = require("./CONFIG/db_connect.js");
const product = require("./ROUTES/routeProduct.js");
const notFound = require("./MIDDLEWARE/notFound.js");
const errorHandlerMiddleware = require("./MIDDLEWARE/errorHandler.js");
const app = express();
require("dotenv").config();
const path = require("path");

app.use(express.json());

app.use("/api/v1", product);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    });
}

const start = async () => {
    try {
        app.listen(port, console.log(`Server is running on ${port}`));
        await connectDB(process.env.DATABASE_URL);
    } catch (error) {
        console.error(`Internal server error is ${error}`);
    }
}

start();

app.use("/", (req, res) => {
    res.send(`<center> Backend is Run on Port ${port}</center>`);
})

app.use(notFound);
app.use(errorHandlerMiddleware);