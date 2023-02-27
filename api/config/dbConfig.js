import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // to initialize dotenv

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.set("strictQuery", true);

// Wait for database to connect, logging an error if there is a problem
async function main() {
  await mongoose.connect(process.env.MONGO, options);
}
main().catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("DB connected sucessfully");
});

export default main;
