"use client";
import React, { useState, useEffect } from "react";
import { Paper, Grid, Box, AppBar, Toolbar, Typography } from "@mui/material";
import Response from "../components/Response";
import TaskForm from "@/components/TaskForm";
import usePageController from "./presenters/controllers/usePageController";

function App() {
  const { webhookData } = usePageController();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Paper
        sx={{
          maxWidth: 936,
          margin: "auto",
          overflow: "hidden",
          width: "960px",
        }}
      >
        <Box component={"div"} pt={1} pb={1} pl={3} pr={3}>
          <TaskForm />
        </Box>
      </Paper>
      <Paper
        sx={{
          maxWidth: 936,
          margin: "auto",
          overflow: "hidden",
          width: "960px",
          mt: 3,
        }}
      >
        {webhookData && (
          <Typography sx={{ color: "text.secondary", py: 3, mx: 3 }}>
            <Box>
              <Response markdown={webhookData} />
            </Box>
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default App;
