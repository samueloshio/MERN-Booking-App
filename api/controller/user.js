import User from "../models/User.js";
import { createError } from "../utils/error.js";

// Update
export const updateUser = async (req, res, next) => {
  // User controller
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// Delete
export const deleteUser = async (req, res, next) => {
  // User controller
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (err) {
    next(err);
  }
};

// Get User
export const getUser = async (req, res, next) => {
  // User controller
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, `Opps!!! ${user} not found.`));

    // destructuring to hide password and isSuperUser row
    const { password, isSuperUser, ...otherDetails } = user._doc;

    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

//Get All Users
export const getAllUsers = async (req, res, next) => {
  // User controller
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
