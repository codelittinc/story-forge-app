import { useState } from "react";
import { createTask } from "../services/data/task";
import SessionService from "@/app/presenters/utils/sessionService";
import { useAppStore } from "@/app/presenters/data/store";

const useTaskFormController = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const { setLoading, loading } = useAppStore();

  const handleSubmit = () => {
    setLoading(true);
    createTask(taskDescription, SessionService.getSessionId());
  };

  return {
    taskDescription,
    setTaskDescription,
    handleSubmit,
    loading
  };
};

export default useTaskFormController;
