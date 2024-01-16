const {
	createTask,
	getAllTasks,
	deleteTask,
	getTask,
	updateTask,
	updateStatus,
} = require("../repositories/taskRepo")

async function addTask(title, description, dueDate) {
	await createTask(title, description, dueDate)
}

async function removeTask(taskId) {
	await deleteTask(taskId)
}

async function getTasks() {
	return await getAllTasks()
}

async function getSingleTasks(taskId) {
	return await getTask(taskId)
}

async function updateTaskInfo(taskId, title, description, date) {
	await updateTask(taskId, title, description, date)
}

async function updateTaskStatus(taskId, status) {
	await updateStatus(taskId, status)
}

module.exports = {
	addTask,
	removeTask,
	getTasks,
	getSingleTasks,
	updateTaskInfo,
	updateTaskStatus,
}
