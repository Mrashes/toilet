const router = require("express").Router()
const ToiletController = require("../../controllers/ToiletController")

router.route("/")
.get(ToiletController.findAll)
.post(ToiletController.create)

router.route("/:id")
.get(ToiletController.findToiletById)

module.exports = router;