const Task = require("../models/task")
const dataSource = require("./db")

async function createTask(title, description, dueDate) {
	await dataSource.transaction(async (manager) => {
		try {
			const newTask = new Task(title, description, new Date(dueDate).toLocaleDateString())
			const tasks = manager.getRepository("tasks")
			await tasks.save(newTask)
		} catch (err) {
			console.error(err)
		}
	})
}

async function deleteTask(taskId) {
	await dataSource.transaction(async (manager) => {
		try {
			manager
				.createQueryBuilder()
				.delete()
				.from("tasks")
				.where("id= :id", { id: taskId })
				.execute()
		} catch (err) {
			console.error(err)
		}
	})
}

async function getTask(taskId) {
	const task = await dataSource.manager.findOneBy("tasks", { id: taskId })
	return task
}

async function updateStatus(taskId, status) {
	await dataSource.transaction(async (manager) => {
		try {
			manager
				.createQueryBuilder()
				.update("tasks")
				.set({ status: status })
				.where("id = :id", { id: taskId })
				.execute()
		} catch (err) {
			console.error(err)
		}
	})
}

async function updateTask(taskId, title, description, date) {
	await dataSource.transaction(async (manager) => {
		try {
			manager
				.createQueryBuilder()
				.update("tasks")
				.set({ title: title, description: description, due_date: date })
				.where("id = :id", { id: taskId })
				.execute()
		} catch (err) {
			console.error(err)
		}
	})
}

async function getAllTasks() {
	try {
		const tasks = await dataSource.getRepository("tasks").find()
		return tasks
	} catch (err) {
		console.error(err)
		return []
	}
}

module.exports = {
	createTask,
	deleteTask,
	getAllTasks,
	getTask,
	updateTask,
	updateStatus,
}
