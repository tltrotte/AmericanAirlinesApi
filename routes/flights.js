const express = require("express");
const router = express.Router();
const locations = [
	"Dallas/Fort Worth",
	"Chicago",
	"Los Angeles",
	"New York City"
];
const models = [
	{ aircraftModel: "Boeing 777", passengerCapacity: 160 },
	{ aircraftModel: "Boeing 757", passengerCapacity: 176 },
	{ aircraftModel: "Airbus 321", passengerCapacity: 200 },
	{ aircraftModel: "Airbus 320", passengerCapacity: 180 }
];

router.get("/", (req, res) => {
	console.log(req.query);
	const { originCity, destinationCity, departureDate } = req.query;
	console.log(Date.now() >= new Date(departureDate));
	if (!departureDate || Date.now >= new Date(departureDate)) {
		res.status(400).json({
			errorMessage:
				"There are no flights for dates in the past. Please select different date. "
		});
	} else if (!locations.includes(originCity)) {
		res.status(400).json({
			errorMessage: `Your entry ${originCity} is not valid. Please select another Airport.`
		});
	} else if (!locations.includes(destinationCity)) {
		res.status(400).json({
			errorMessage: `Your entry ${destinationCity} is not valid. Please select another Airport.`
		});
		//TODO Add Randomization to Flight numbers
	} else {
		res.json({ numberOfFlights: 2 });
	}
});

module.exports = router;
