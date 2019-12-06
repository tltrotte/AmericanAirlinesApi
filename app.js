const express = require("express");

const app = express();

//Import Routes
const flightsRoute = require("./routes/flights");
app.use("/flights", flightsRoute);

app.listen(8000);
