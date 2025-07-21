export async function generateText(topic: string) {
  
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `You are a strict summarization-only assistant.

                You are NOT allowed to generate JSON, answer questions, or respond to anything other than summarization.

                If the user input is not a content paragraph but a question (like "Can you generate JSON data?"), respond exactly with:
                "I'm only able to summarize content. Please provide some content for me to summarize."

                ---
                User input:
                """${topic}"""
                ---
                `
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to generate content");
  }

  const data = await res.json();
  return data.content;
}
