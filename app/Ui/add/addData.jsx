"use client";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Form from "@/app/Ui/add/form"

export default function AddData() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const description = e.target.elements.description.value.trim();
    const priority = e.target.elements.priority.value;
    const date = new Date().toLocaleString();

    const newTask = {
      id: uuidv4(),
      task,
      description,
      priority,
      date,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    e.target.reset();
    router.push("./");
    
  };

  return (
    <>
    <Form handleSubmit={handleSubmit} />
    </>
  );
} 
