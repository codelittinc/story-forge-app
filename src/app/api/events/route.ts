import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { headers } = request;

  // Ensure the client accepts SSE
  if (headers.get("accept") !== "text/event-stream") {
    return new Response("Expected text/event-stream", { status: 400 });
  }

  let streamClosed = false; // Track whether the stream is closed

  const stream = new ReadableStream({
    start(controller) {
      // Store the controller to send data later
      (globalThis as any).sseController = controller;

      // Send an initial comment to keep the connection alive
      controller.enqueue(`: connected\n\n`);

      // Periodically send a heartbeat to keep the connection alive
      const keepAlive = setInterval(() => {
        if (!streamClosed) {
          // Only enqueue data if the stream is still open
          try {
            controller.enqueue(`: keep-alive\n\n`);
          } catch (error) {
            console.error("Error enqueuing data: ", error);
          }
        }
      }, 30000); // Every 30 seconds

      // Clean up when the stream is closed
      controller.close = () => {
        console.log("SSE connection closed by the server");
        clearInterval(keepAlive);
      };
    },
    cancel() {
      console.log("SSE connection closed by the client");
      streamClosed = true; // Mark the stream as closed
      clearInterval((globalThis as any).keepAlive);
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
