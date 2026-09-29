export const chatService = {
  getConversationHistory: async () => {
    return [];
  },

  sendMessage: async (message) => {
    const response = await fetch(
      "http://127.0.0.1:8000/analyze-audit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          issue: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to connect to the audit AI backend");
    }

    const data = await response.json();

    return {
      id: Date.now(),
      role: "assistant",
      content: data.analysis,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  },
};
