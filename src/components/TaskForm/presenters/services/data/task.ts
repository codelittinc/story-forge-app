const NEXT_PUBLIC_HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

export const createTask = async (description: string) => {
  const data = {
    task_description: description,
    webhook_url: `${NEXT_PUBLIC_HOST_URL}/api/tasks`,
    prompt: {
      template:
        "Given the context below, answer the question concisely:\n\nContext:\n{context}\n\nPrevious Conversation:\n{chat_history}\n\nTask:\n{task_description}. Give a reference to where in your context you are getting your answer from. If you don't have the answer in your context then say that you don't know",
    },
    context_id: "company-data",
    session_id: "asddasdsa",
  };

  fetch("https://api.storyforge.codelitt.dev/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};