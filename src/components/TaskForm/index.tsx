"use client";
import React from "react";
import { TextField, Grid, Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import useTaskFormController from "./presenters/controllers/useTaskFormController";

const TaskForm = () => {
  const {
    taskDescription, 
    setTaskDescription, 
    handleSubmit,
    loading
  } = useTaskFormController();

  return (
    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
      <Grid item>
        <SearchIcon color="inherit" sx={{ display: 'block' }} />
      </Grid>
      <Grid item xs>
        <TextField
          label="Your question"
          variant="standard"
          fullWidth
          multiline
          focused
          autoFocus
          margin="normal"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: 'default' },
          }}
        />
      </Grid>
      <Grid item>
        <LoadingButton
          onClick={() => handleSubmit()}
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
