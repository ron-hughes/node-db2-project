const express = require("express")

const db = require("../data/config")

const router = express.Router();


router.get("/", async (req, res, next) => {
	try {
		const cars = await db("car-dealer")
		res.json(cars)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
    try {
        const carData = req.body
        const [vin] = await db("car-dealer").insert(carData)
        const newCar = await db("car-dealer").where( { vin })
        res.status(201).json(newCar)
        console.log(newCar)
    }
    catch (err) {
        next(err)
    }


})

module.exports = router