import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// THIS COMMENTED SECTION BELOW CAN BE REMOVE
// AS IT WAS USED TO CHECK FOR VERIFICATIONS

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Login Successfull");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Login Successfull! now you can continue");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin you have logged in Successfully! now you can continue");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
