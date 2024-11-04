const { CustomAPIError } = require("../ERROR/error.js");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (error, req, res, next) => {
    if (error instanceof CustomAPIError) {
        res.status(error.statusCode).json({ msg: error.message });
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: `Something went wrong. Try again later....` });
}

module.exports = errorHandlerMiddleware;