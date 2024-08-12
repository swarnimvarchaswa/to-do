"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Form from "@/app/Ui/add/form";

export default function Edit() {
  const [task, setTask] = useState(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      const taskToEdit = tasks.find((task) => task.id === id);
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id,
      task: e.target.elements.task.value.trim(),
      description: e.target.elements.description.value.trim(),
      priority: e.target.elements.priority.value,
      date: new Date().toLocaleString(),
      completed: task.completed, // Preserve the completed status
    };

    const storedTasks = localStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const updatedTasks = tasks.map((t) => (t.id === id ? updatedTask : t));

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    router.push("/"); // Redirect to the main page
  };

  return (
    <>
      {task && (
        <Form
          handleSubmit={handleSubmit}
          initialValues={{
            task: task.task,
            description: task.description,
            priority: task.priority,
          }}
        />
      )}
    </>
  );
}
