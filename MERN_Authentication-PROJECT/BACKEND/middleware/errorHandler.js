const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // MongoDB Invalid ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid ID";
    }

    // MongoDB Duplicate Key Error
    if (err.code === 11000) {
        statusCode = 400;
        message = `${Object.keys(err.keyValue)[0]} already exists`;
    }

    // JWT Invalid Token
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid Token";
    }

    // JWT Expired Token
    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token Expired";
    }

    res.status(statusCode).json({
        success: false,
        message,
        errors: err.errors || [],
    });
};

export default errorHandler;