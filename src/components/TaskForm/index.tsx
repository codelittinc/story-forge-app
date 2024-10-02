"use client";
import React from "react";
import { Grid, Input } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import useTaskFormController from "./presenters/controllers/useTaskFormController";

const TaskForm = () => {
  const {
    taskDescription,
    setTaskDescription,
    handleSubmit,
    loading,
    handleKeyDown,
  } = useTaskFormController();

  return (
    <Grid container spacing={3} sx={{ alignItems: "center" }}>
      <Grid item>
        <SearchIcon color="inherit" sx={{ display: "block" }} />
      </Grid>
      <Grid item xs>
        <Input
          fullWidth
          multiline
          autoFocus
          value={taskDescription}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </Grid>
      <Grid item>
        <LoadingButton
          type="submit"
          onClick={handleSubmit}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          sx={{ mr: 1 }}
          variant="contained"
        >
          Send
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
