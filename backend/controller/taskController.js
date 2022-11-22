import Task from '../models/todoModel.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
};
