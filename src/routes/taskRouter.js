var express = require("express")
var router = express.Router()
const {
	addTask,
	removeTask,
	updateTaskInfo,
	updateTaskStatus,
	getSingleTasks,
} = require("../services/taskService")

router.post("/addTask", async function (req, res, next) {
	await addTask(req.body.title, req.body.description, req.body.date)
	res.status(200).send("Sucess")
})

router.delete("/removeTask", async function (req, res, next) {
	await removeTask(req.query.id)
	res.status(200).send("Success")
})

router.get("/getTask", async function (req, res, next) {
	const task = await getSingleTasks(req.query.id)
	res.status(200).json(task)
})

router.patch("/updateTask", async function (req, res, next) {
	console.log(req.body)
	await updateTaskInfo(req.body.id, req.body.title, req.body.description, req.body.date)
	res.status(200).send("Success")
})

router.patch("/updateTaskStatus", async function (req, res, next) {
	await updateTaskStatus(req.body.id, req.body.status)
	res.status(200).send("Success")
})

module.exports = router
