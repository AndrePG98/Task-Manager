export function modalFn() {
	const btn = document.getElementById("addTask")
	const modal = document.getElementById("modalWrapper")
	const title = document.querySelector('input[name="title"]')
	const description = document.querySelector('textarea[name="description"]')
	const date = document.querySelector('input[name="date"]')

	flatpickr("#date", {})

	btn.onclick = () => {
		modal.style.display = "flex"
	}

	modal.onclick = (event) => {
		if (event.target.id === "modalWrapper") {
			modal.style.display = "none"
			title.value = ""
			description.value = ""
			date.value = ""
		}
	}

	const summitBtn = document.getElementById("submit")

	const closeBtn = document.getElementById("modalCloseBtn")

	summitBtn.onclick = (e) => {
		e.preventDefault()
		modal.style.display = "none"
		window.addTask(title.value, description.value, date.value)
		title.value = ""
		description.value = ""
		date.value = ""
	}

	closeBtn.onclick = (e) => {
		modal.style.display = "none"
		title.value = ""
		description.value = ""
		date.value = ""
	}
}
