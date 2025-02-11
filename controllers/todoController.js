const Todo = require("../models/todo")

exports.getAllTodos = (req, res) => {
    // Todo.getRandomDummyTodos(req, res)
    Todo.getAllTodos((err, todos) => {
        if (err) {
            throw err
        }
        res.json(todos)
    })
}

exports.getTodoById = (req, res) => {
    Todo.getTodoById(req.params.id, (err, todo) => {
        if (err) {
            throw err
        }
        res.json(todo)
    })
}

exports.createTodo = (req, res) => {
    const newTodo = {
        title: req.body.title,
        completed: req.body.completed
    }

    Todo.createTodo(newTodo, (err, result) => {
        if (err) {
            throw err
        }
        res.json({
            message: "Todo created successfully"
        })
    })
}

exports.updateTodo = (req, res) => {
    const updatedTodo = {
        title: req.body.title,
        completed: req.body.completed
    }

    Todo.updateTodo(req.params.id, updatedTodo, (err, result) => {
        if (err) {
            throw err
        }
        res.json({
            message: "Todo updated successfull"
        })
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, (err, result) => {
        if (err) {
            throw err
        }
        res.json({
            message: "Todo deleted successfully"
        })
    })
}

exports.getRandomDummyTodos = async (req, res) => {
    console.log("Get random dummy todos...")
    let response = await Todo.getRandomDummyTodos()
    res.json(response)
}