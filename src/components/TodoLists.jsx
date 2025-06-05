import React from "react";
import { useState } from "react";

function TodoLists() {
  const [todoList, setTodolist] = useState([
    { id: 0, isDone: false, taskName: "Add more list!" },
  ]);

  const [inpTask, setInpTask] = useState("");

  const addTask = () => {
    setTodolist([
      ...todoList,
      {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        isDone: false,
        taskName: inpTask,
      },
    ]);
    setInpTask("")
  };

  const handleSubmit = async (e) => {
    await e.preventDefault()
    addTask()
  }

  const removeTask = (id) => {
    setTodolist(todoList.filter((el) => el.id !== id));
    console.log(todoList);
  };

  const handleChecked = (id) => {
    setTodolist(
      todoList.map((todoList) => {
        if (todoList.id === id) {
          return { ...todoList, isDone: !todoList.isDone };
        } else {
          return todoList;
        }
      })
    );
  };

  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit} className="flex border-b p-3">
        <input
          className="border border-gray-600 w-full mr-2 p-2"
          type="text"
          placeholder="Add new task..."
          value={inpTask}
          onChange={(e) => setInpTask(e.target.value)}
        />
        {/* <button className="btn" onClick={() => AddTask()}>
          Add
        </button> */}
      </form>
      <br />
      <div className="m-2 p-2 flex flex-col gap-2">
        {todoList.map((el) => (
          <div className="flex flex-row justify-between items-baseline">
            <input
              type="checkbox"
              name="isDone"
              checked={el.isDone}
              onChange={() => handleChecked(el.id)}
              key={el.id}
            />
            <p className={el.isDone ? "line-through text-gray-500" : ""}>{el.taskName}</p>
            <button className="btn btn-xs" onClick={() => removeTask(el.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoLists;
