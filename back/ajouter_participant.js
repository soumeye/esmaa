const express = require("express");
const mongoose = require("mongoose");
const participantRoute = require("./routes/participant.route");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/participants", participantRoute);
// app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect("mongodb://localhost:27017/challenge", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3800, () => {
      console.log("Server is running on port 3800");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
