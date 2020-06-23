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
        const [id] = await db("car-dealer").insert(carData)
        const newCar = await db("car-dealer").where("id", id).first()
        res.status(201).json(newCar)
    }
    catch (err) {
        next(err)
    }


})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params

    try {
        await db("car-dealer").where("id", id).del()
        res.status(204).end()
    }
    catch (err) {
        next(err)
    }
})

module.exports = router