"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/app/presenters/data/store";

const usePageController = () => {
  const [webhookData, setWebhookData] = useState("");
  const { setLoading } = useAppStore();

  // Establish SSE connection
  useEffect(() => {
    const eventSource = new EventSource("/api/events");

    eventSource.onmessage = (event) => {
      const data = event.data; // Parse the JSON data
      console.log("SSE message received:", data);
      setWebhookData(data);
      setLoading(false);
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      setLoading(false);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return {
    webhookData
  };
};

export default usePageController;
