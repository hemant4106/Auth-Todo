const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({ userId: req.user.id, task: req.body.task });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

exports.updateTodo = async (req, res) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ msg: "Todo not found" });
  res.json(updated);
};

exports.deleteTodo = async (req, res) => {
  const deleted = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!deleted) return res.status(404).json({ msg: "Todo not found" });
  res.json({ msg: "Deleted successfully" });
};
