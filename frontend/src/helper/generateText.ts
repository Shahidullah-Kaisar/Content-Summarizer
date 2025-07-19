
export async function generateText(topic: string) {

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate`, {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: `Summarize ${topic} in 5 to 10 line.`,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to generate content');
  }

  const data = await res.json();
  return data.content;
}
