const typeoprm = require("typeorm")

const AppDataSource = new typeoprm.DataSource({
	type: "postgres",
	host: "localhost",
	port: "5432",
	username: "postgres",
	password: "postgres",
	database: "DB",
	entities: [require("../entities/TaskSchema")],
})

AppDataSource.initialize()
	.then(() => {
		console.log("Connected to Db")
	})
	.catch((err) => {
		console.error("Error connection to Database:", err)
	})

module.exports = AppDataSource
