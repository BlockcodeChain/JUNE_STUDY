const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  // MongoDB Invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // MongoDB Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 409;

    const field = Object.keys(err.keyValue)[0];
    message = `${field} already exists`;
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;

    errors = Object.values(err.errors).map((item) => item.message);

    message = "Validation Error";
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

  return res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack:
      process.env.NODE_ENV === "development"
        ? err.stack
        : undefined,
  });
};

export default errorHandler;