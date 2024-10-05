// import express, { json } from "express";
// import { config } from "dotenv";

// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";

// const app = express();
// config()

// connectDB();
// app.use(json())

// // app.get ("/", (req,res) => {
// //     res.send("API is Running" )
// // })
// app.use('/api/user', userRoutes)

// //
// // app.use(notfound)
// // app.use(errorHandler)
// // app.use('/api/user', require('./routes/userRoutes.js'))
// const PORT = process.env.PORT || 5000
// app.listen(5000, console.log(`Server started on port ${PORT}`))




import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routes/userRoutes.js";

// Initialize app
const app = express();
config();

connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Example API route for signing up a user
// const userRouter = require('./routes/userRoutes');
app.use("/api/user", userRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
