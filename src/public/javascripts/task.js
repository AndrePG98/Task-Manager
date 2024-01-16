function onDragStart(event, element) {
	event.dataTransfer.setData("text/plain", event.target.id)
	element.style.transform = "scale(0)"
}

function onDragEnd(event, element) {
	element.style.transform = "scale(1)"
}

function onDragOver(event) {
	event.preventDefault()
}

function onDrop(event, status) {
	event.preventDefault()
	const id = event.dataTransfer.getData("text")
	const task = document.getElementById(id)
	const dropzone = event.target
	if (dropzone.classList.contains("tasks")) {
		window.updateTaskStatus(id, status)
		dropzone.appendChild(task)
	}
}

let oldTitle = ""

function editTitle(element) {
	element.addEventListener("keypress", function (event) {
		if (element.innerText.length >= 10) {
			event.preventDefault()
		}
	})
	oldTitle = element.innerText
	element.setAttribute("contenteditable", "true")
	element.focus()
	element.innerText = ""
}

function saveTitle(element) {
	const newTitle = element.innerText.trim()
	if (newTitle.length <= 0) {
		element.innerText = oldTitle
	}
	oldTitle = ""
}

function editDate(event, element) {
	event.preventDefault()
	const fp = flatpickr("#modalDueDate", {
		onChange: function (selectedDates, dateStr, instance) {
			element.innerText = dateStr
		},
	})
	fp.open()
}

let oldDescription = ""

function editDescription(element) {
	element.addEventListener("keypress", function (event) {
		if (element.innerText.length >= 100) {
			event.preventDefault()
		}
	})
	oldDescription = element.innerText
	element.setAttribute("contenteditable", "true")
	element.focus()
	element.innerText = ""
}

function saveDescription(element) {
	const newDescription = element.innerText.trim()
	if (newDescription.length <= 0) {
		element.innerText = oldDescription
	}
}

async function taskOnClick(event, taskId) {
	if (event.target instanceof HTMLSpanElement) {
		return
	}
	const task = await window.getTask(taskId)
	document.getElementById("taskTitle").innerText = task.title
	document.getElementById("modalDueDate").innerText = task.due_date
	document.getElementById("description").innerText = task.saveDescription
	const taskModal = document.getElementById("taskModal")
	taskModal.style.display = "flex"
	taskModal.onclick = (e) => {
		if (e.target.id === "taskModal") {
			taskModal.style.display = "none"
		}
	}
}

function applyClick(taskId) {
	const title = document.getElementById("taskTitle").innerText.trim()
	const date = document.getElementById("modalDueDate").innerText.trim()
	const description = document.getElementById("description").innerText.trim()
	window.updateTask(taskId, title, description, date)
}

function closeModal() {
	const modal = document.getElementById("taskModal")
	modal.style.display = "none"
}
