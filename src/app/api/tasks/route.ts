// app/api/tasks/route.js

export async function POST(request) {
  try {
    const body = await request.json();
    const { response } = body;

    // Check if the SSE controller exists
    if (globalThis.sseController) {
      const data = `data: ${response}\n\n`;
      globalThis.sseController.enqueue(data);
    } else {
      console.warn("No SSE connection established");
    }

    return new Response(JSON.stringify({ message: "Webhook received" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
