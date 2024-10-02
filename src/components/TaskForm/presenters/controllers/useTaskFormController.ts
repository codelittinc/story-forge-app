import { useState } from "react";
import { createTask } from "../services/data/task";
import { getSessionId } from "@/app/presenters/utils/sessionId.service";
import { useAppStore } from "@/app/presenters/data/store";

const useTaskFormController = () => {
  const [taskDescription, setTaskDescription] = useState("Tell me about...");
  const { setLoading, loading } = useAppStore();

  const handleSubmit = () => {
    setLoading(true);
    createTask(taskDescription, getSessionId());
  };

  return {
    taskDescription,
    setTaskDescription,
    handleSubmit,
    loading
  };
};

export default useTaskFormController;
