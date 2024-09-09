const express = require("express");
const app = express();
const dotenv=require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const connectDB = require("./src/config/db");

app.use(express.json());

connectDB();
const userRoute=require("./src/routes/userRoutes");
app.use('/api/user', userRoute);
const profileRoute = require("./src/routes/profileRoutes");
app.use('/api/profile', profileRoute)

const postRoutes = require("./src/routes/postRoutes" );
app.use("/api/post", postRoutes)




app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
  