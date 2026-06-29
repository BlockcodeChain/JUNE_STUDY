import User from "../models/user.model.js";
import AsyncHandler from "../middleware/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/Token.js";
import sendEmail from "../utils/sendEmail.js";

export const Register = AsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check required fields
    if (!username || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    // // Remove extra spaces
    // const trimmedUsername = username.trim();
    // const trimmedEmail = email.trim().toLowerCase();

    // // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailRegex.test(trimmedEmail)) {
    //     throw new ApiError(400, "Invalid email address");
    // }

    // Password validation
    if (password.length < 8) {
        throw new ApiError(400, "Password must be at least 8 characters");
    }

   
 const existingUser = await User.findOne({   $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken(user._id);

    // Remove password from response
    const createdUser = await User.findById(user._id).select("-password");

    // Send welcome email
    await sendEmail(
        createdUser.email,
        "Welcome",
        `Hello ${createdUser.username}, welcome to our application!`
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            "User registered successfully",
            {
                token,
                user: createdUser,
            }
        )
    );
});

