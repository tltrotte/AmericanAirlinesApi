const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	const { originCity, destinationCity, departureDate } = req.query;
	if (!originCity || !destinationCity || !departureDate) {
		res.status(400).json({
			errorMessage:
				"There are if flights for dates in the past. Please select different date. "
		});
	} else {
		res.json({ numberOfFlights: 2 });
	}
});

module.exports = router;
