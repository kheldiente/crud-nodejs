const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

// Routes
router.get("/", todoController.getAllTodos)
// This declaration should be before "/:id" impl in order for it to WORK!
router.get("/random", todoController.getRandomDummyTodos)

router.get("/:id", todoController.getTodoById)
router.post("/", todoController.createTodo)
router.put("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)

module.exports = router