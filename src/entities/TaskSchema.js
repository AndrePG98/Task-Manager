const dataSource = require("../repositories/db")
const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
	name: "tasks",
	tableName: "tasks",
	columns: {
		id: {
			primary: true,
			type: "varchar",
		},
		title: {
			type: "varchar",
		},
		description: {
			type: "varchar",
		},

		status: {
			type: "varchar",
		},

		due_date: {
			type: "date",
		},
	},
})
