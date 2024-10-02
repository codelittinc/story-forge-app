"use client";
import React, { useState, useEffect } from "react";
import { Paper, Grid, Box } from "@mui/material";
import Response from "../components/Response";
import TaskForm from "@/components/TaskForm";

function App() {
  const [webhookData, setWebhookData] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    if (sessionId == "") {
      // generate random session id
      const randomSessionId = Math.random().toString(36).substring(7);
      setSessionId(randomSessionId);
    }
  }, [sessionId, setSessionId]);
  // Establish SSE connection
  useEffect(() => {
    const eventSource = new EventSource("/api/events");

    eventSource.onmessage = (event) => {
      const data = event.data; // Parse the JSON data
      console.log("SSE message received:", data);
      setWebhookData(data);
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6}>
        <Paper elevation={3}>
          <TaskForm />
          {webhookData && (
            <Box mt={2}>
              <Response markdown={webhookData} />
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
