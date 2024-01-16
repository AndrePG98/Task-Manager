const { v4: uuidv4 } = require("uuid")

module.exports = class Task {
	constructor(title, description, date) {
		this.id = uuidv4()
		this.title = title
		this.description = description
		this.due_date = date
		this.status = "Pending"
	}
}
