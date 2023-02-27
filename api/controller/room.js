import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next();
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// Update Room
export const updateRoom = async (req, res, next) => {
  // room controller
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

// Delete ROOM
export const deleteRoom = async (req, res, next) => {
  // room controller
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room deleted successfully");
  } catch (err) {
    next(err);
  }
};

// Get Room
export const getRoom = async (req, res, next) => {
  // room controller
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return next(createError(404, `Opps!!! ${room} not found.`));

    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//Get All Rooms
export const getAllRooms = async (req, res, next) => {
  // room controller
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
