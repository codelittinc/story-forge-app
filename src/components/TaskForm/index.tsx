"use client";
import React from "react";
import { TextField, Button, Box } from "@mui/material";
import useTaskFormController from "./presenters/controllers/useTaskFormController";

const TaskForm = () => {
  const { taskDescription, setTaskDescription, handleSubmit } =
    useTaskFormController();

  return (
    <Box p={3} component={"form"} onSubmit={handleSubmit}>
      <TextField
        label="Your question"
        variant="outlined"
        fullWidth
        margin="normal"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default TaskForm;
