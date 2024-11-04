const Mongoose = require("mongoose")

const connection = async (url) => {
    return Mongoose.connect(url)
        .then(() => {
            console.log(`DataBase is connected successfully.`);
        })
        .catch((error) => {
            console.error(`Server connection failed => `, error.message);
            console.error(`Full Error detail is : => `, error);
        }), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
}

module.exports = connection;