import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//routes
import postRoutes from "./routes/posts.js";

const app = express();

// app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/memory_project";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log("Server running on port" + PORT));
    })
    .catch((err) => console.log(err));

// mongoose.set('useFindAndModify', false);
