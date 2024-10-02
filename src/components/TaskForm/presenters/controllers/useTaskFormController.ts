import { useState } from "react";
import { createTask } from "../services/data/task";

const useTaskFormController = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    createTask(taskDescription);
  };
  return {
    taskDescription,
    setTaskDescription,
    handleSubmit,
  };
};

export default useTaskFormController;
