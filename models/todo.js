const db = require("../config/database")

exports.getAllTodos = (callback) => {
    console.log("SELECT query executing")
    db.query("SELECT * FROM todos", callback)
}

exports.getTodoById = (id, callback) => {
    db.query("SELECT * FROM todos WHERE id = ?", [id], callback)
}

exports.createTodo = (newTodo, callback) => {
    db.query("INSERT INTO todos SET ?", newTodo, callback)
}

exports.updateTodo = (id, updatedTodo, callback) => {
    db.query("UPDATE todos SET ? WHERE id = ?", [updatedTodo, id], callback)
}

exports.deleteTodo = (id, callback) => {
    db.query("DELETE FROM todos WHERE id = ?", [id], callback)
}

exports.getRandomDummyTodos = async () => {
    const res = await fetch("https://dummyjson.com/todos?limit=3&skip=10")
    return res.json()
}