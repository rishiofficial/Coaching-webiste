
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

import generateToken from "../config/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // res.send({ name, email, password });

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // res.send({ email, password });
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});


export { registerUser, authUser };
