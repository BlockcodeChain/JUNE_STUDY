import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    headline: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    education: [
      {
        college: String,
        degree: String,
        fieldOfStudy: String,
      },
    ],

    location: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    experience: [
      {
        title: String,
        company: String,
        description: String,
      },
    ],

    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;