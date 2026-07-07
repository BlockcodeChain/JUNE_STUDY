import jwt from "jsonwebtoken";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import userModel from "../models/user.model.js";

const isAuthenticated = AsyncHandler(async (req, res, next) => {
  // Token nikalo
  const token =
    req.cookies?.token ||
    req.header("Authorization")?.replace("Bearer ", "");

  // Token nahi mila
  if (!token) {
    throw new ApiError(401, "Please login first");
  }

  // Token verify karo
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // User find karo
  const user = await userModel.findById(decoded.id).select("-password");

  if (!user) {
    throw new ApiError(401, "User not found");
  }

  // User ko request me attach karo
  req.user = user;

  next();
});

export default isAuthenticated;