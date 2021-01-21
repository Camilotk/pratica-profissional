const express = require('express')
const { v4: uuidv4 } = require("uuid")

const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let courses = [
	{
		id: "66e9aa36-eac0-4667",
		name: "Análise e Desenvolvimento de Sistemas",
		type: "Superior",
	},
	{
		id: "ddd9c637-7bef-416c",
		name: "Técnico em Informática",
		type: "Técnico",
	}
]

app.get("/courses", (req, res) => {
	res.json(courses)
})

app.get("/courses/:id", (req, res) => {
	const { id } = req.params;
	const getCourse = courses.find((course) => course.id === id)

	if (!getCourse) {
		res.status(500).json({ error: "Curso não encontrado" })
	} else {
		res.json(getCourse);
	}
})

app.post("/courses", (req, res) => {
	const {name, type} = req.body
	const newCourse = { id: uuidv4(), name, type}
	courses.push(newCourse)
	res.json(newCourse)
})

app.put("/courses/:id", (req, res) => {
	const { id } = req.params
	const body = req.body
	const courseIndex = courses.findIndex((course) => course.id === id);
	if (courseIndex < 0) {
		return res.status(500).json({ error: "Curso não encontrado!" })
	}
	const updatedCourse = { id, ...body }
	courses[courseIndex] = updatedCourse
	res.json(updatedCourse)
})

app.delete("/courses/:id", (req, res) => {
	const { id } = req.params
	const courseIndex = courses.findIndex((course) => course.id === id)
	if (courseIndex < 0) {
		return res.status(500).json({error: "Curso não encontrado!"})
	}

	courses.splice(courseIndex, 1)
	res.status(200).json({ msg: "Curso excluido com sucesso!" })
})

app.listen(PORT, console.log(`Server started on port ${PORT}`));
