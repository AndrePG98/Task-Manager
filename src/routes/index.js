var express = require("express")
var router = express.Router()
const getTasks = require("../services/taskService").getTasks

/* GET home page. */
router.get("/", async function (req, res, next) {
	const tasks = await getTasks()
	res.render("index", { tasks: [...tasks] })
})

module.exports = router
