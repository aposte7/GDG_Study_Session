import { useSelector, useDispatch } from "react-redux";
import { create, deleteTask, changeStatus } from "./Todo/todoSlice";
import { useState } from "react";

function App() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(create({ id: Date.now(), text: taskText, status: false }));
      setTaskText("");
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <div className="h-dvh w-full space-y-8 bg-indigo-950 px-10 pt-20 text-blue-500">
      <div className="mx-auto flex w-3/4 justify-center py-4">
        <form className="flex h-fit gap-4" onSubmit={handleAddTask}>
          <input
            className="h-fit w-[25rem] border-b border-b-gray-500 px-1 text-lg focus:border-b-blue-400 focus:outline-none"
            type="text"
            placeholder="todo..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-blue-400 px-2 text-lg text-cyan-800"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mx-auto w-fit space-y-4 py-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex w-[33rem] justify-between gap-6 rounded bg-blue-900 px-4 py-1"
          >
            <p className={task.status ? "line-through" : ""}>
              {task.text.length > 50
                ? `${task.text.slice(0, 50)}...`
                : task.text}
            </p>
            <div className="flex items-center">
              <p
                className="inline-block cursor-pointer px-4 text-lg text-orange-600"
                onClick={() => handleDeleteTask(task.id)}
              >
                X
              </p>
              <input
                className="inline-block h-4 w-4"
                type="checkbox"
                checked={task.status}
                onChange={() => handleToggleStatus(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
