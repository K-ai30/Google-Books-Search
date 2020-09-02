const express = require("express");

const mongoose = require("mongoose");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3012;

const routes = require("./routes");
const db = require("./models");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://<dbuser>:<dbpassword>@ds333248.mlab.com:33248/heroku_rdl96v68",
  { useNewUrlParser: true }
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendFile()path.join(_dirname, 'client', 'build', 'index.html');
    });
}

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});