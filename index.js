import express from "express";
import main from "./config/dbConfig.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// import route files
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";

dotenv.config();
const app = express();

// Connect to database
main();

app.get("/", (req, res) => {
  res.send("Hello Home Page, first message updated!!!");
});

// Middlewares Begins
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Middlewares ends

app.listen(process.env.PORT, () => {
  main();
  console.log("Connected to the backend!");
});
