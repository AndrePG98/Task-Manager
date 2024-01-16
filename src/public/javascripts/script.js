import { modalFn } from "./modal.js"

window.onload = () => {
	modalFn()
}

window.deleteTask = function deleteTask(taskId) {
	fetch(`tasks/removeTask?id=${taskId}`, { method: "DELETE" }).then((res) => {
		if (res.ok) {
			window.location.href = "/"
		}
	})
}

window.addTask = function addTask(title, description, dueDate) {
	fetch("tasks/addTask", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title: title,
			description: description,
			date: dueDate,
		}),
	}).then((res) => {
		if (res.ok) {
			window.location.href = "/"
		}
	})
}

window.getTask = async function getTask(taskId) {
	try {
		const response = await fetch(`tasks/getTask?id=${taskId}`, {
			method: "GET",
		})
		if (response.ok) {
			const task = await response.json()
			return task
		} else {
			throw new Error("Network response was not ok.")
		}
	} catch (error) {
		console.error("There has been a problem with your fetch operation:", error)
	}
}

window.updateTask = async function updateTask(taskId, title, description, date) {
	fetch(`tasks/updateTask`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			id: taskId,
			title: title,
			description: description,
			date: date,
		}),
	}).then((res) => {
		if (res.ok) {
			window.location.href = "/"
		}
	})
}

window.updateTaskStatus = function updateTaskStatus(taskId, status) {
	fetch(`tasks/updateTaskStatus`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			id: taskId,
			status: status,
		}),
	})
}
