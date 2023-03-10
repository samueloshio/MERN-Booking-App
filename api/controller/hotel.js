import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

// Create 
export const createHotel = async (req, res, next) => {
    // hotel controller
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err){
        next(err)
    }
}

// Update
export const updateHotel = async (req,res,next) => {
    // hotel controller
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, {new:true})
        res.status(200).json(updatedHotel)
    } catch (err){
        next(err)
    }
}

// Delete
export const deleteHotel = async (req,res,next) => {
    // hotel controller
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted successfully")
    } catch (err){
        next(err)
    }
}

// Get Hotel
export const getHotel = async (req,res,next) => {
    // hotel controller
    try {
        const hotel = await Hotel.findById(req.params.id)
        if(!hotel) return next(createError(404, `Opps!!! ${hotel} not found.`))

        res.status(200).json(hotel)
    } catch (err){
        next(err)
    }
}

//Get All Hotels
export const getAllHotels = async (req,res,next) => {
    // hotel controller
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err){
        next(err)
    }
}