// app/api/events/route.ts

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { headers } = request;

  // Ensure the client accepts SSE
  if (headers.get("accept") !== "text/event-stream") {
    return new Response("Expected text/event-stream", { status: 400 });
  }

  // Create a stream to send events to the client
  const stream = new ReadableStream({
    start(controller) {
      // Store the controller to send data later
      (globalThis as any).sseController = controller;

      // Send a comment to keep the connection alive (optional)
      controller.enqueue(`: connected\n\n`);
    },
    cancel() {
      console.log("SSE connection closed by client");
      delete (globalThis as any).sseController;
    },
  });

  // Return the stream as a response
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
