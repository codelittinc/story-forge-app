"use client";
import React, { useState, useEffect } from "react";
import { Paper, Grid, Box, AppBar, Toolbar, Typography } from "@mui/material";
import Response from "../components/Response";
import TaskForm from "@/components/TaskForm";
import usePageController from "./presenters/controllers/usePageController";

function App() {
  const { webhookData } = usePageController();
  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px' 
    }}>
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', width: '960px' }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Toolbar>
            <TaskForm />
          </Toolbar>
        </AppBar>
        <Typography align="center" sx={{ color: 'text.secondary', my: 8, mx: 2 }}>
            {webhookData && (
              <Box mt={2}>
                <Response markdown={webhookData} />
              </Box>
            )}
        </Typography>
      </Paper>
    </Box>
  );
}

export default App;
