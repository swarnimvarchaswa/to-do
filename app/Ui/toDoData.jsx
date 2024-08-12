"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import TaskList from "./taskList";
import Link from "next/link";

export default function ToDoData() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <div className="my-1 border-l-2 w-full rounded-r-xl text-white/90 bg-white/10 hover:bg-white/20 text-xl">
        <Link className=" block py-3 px-5" href="./add">
          Add Task
        </Link>
      </div>
      {tasks
        .filter((task) => !task.completed)
        .map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        ))}
      {/* <h2 className="text-white m-0 py-6 font-thin tracking-widest text-xl">
        Completed
      </h2> */}
      <h2
        className={`text-white m-0 py-6 font-thin tracking-widest text-xl ${
          tasks.some((task) => task.completed) ? "" : "hidden"
        }`}
      >
        Completed
      </h2>
      {tasks
        .filter((task) => task.completed)
        .map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        ))}
    </>
  );
}
