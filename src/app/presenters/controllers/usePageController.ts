"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/app/presenters/data/store";

const usePageController = () => {
  const [webhookData, setWebhookData] = useState("");
  const { setLoading } = useAppStore();

  // Establish SSE connection
  useEffect(() => {
    const eventSource = new EventSource("/api/events");

    eventSource.onopen = () => {
      console.log("SSE connection opened.");
    };

    eventSource.onmessage = (event) => {
      const data = event.data; // Parse the JSON data
      const { response } = JSON.parse(data);
      setWebhookData(response);
      setLoading(false);
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      setLoading(false);

      // Attempt to reconnect after a delay if the connection was lost
      if (eventSource.readyState === EventSource.CLOSED) {
        console.log("SSE connection closed. Attempting to reconnect...");
        setTimeout(() => {
          eventSource.close();
          const newEventSource = new EventSource("/api/events");
          // Handle new eventSource...
        }, 5000); // 5-second delay before retrying
      }
    };

    return () => {
      eventSource.close();
      console.log("SSE connection closed by component unmount.");
    };
  }, []);

  return {
    webhookData,
  };
};

export default usePageController;
