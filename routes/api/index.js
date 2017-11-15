const router = require("express").Router()
const toiletRoutes = require("./toilet")

router.use("/toilets", toiletRoutes)

module.exports = router