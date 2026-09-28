import { delay } from './api';
import { mockChatHistory } from '../data/mockChat';

export const chatService = {
  getConversationHistory: async () => {
    await delay(500);
    return [...mockChatHistory];
  },

  sendMessage: async (message) => {
    await delay(1200); // Simulate LLM latency
    
    // In actual implementation, this will do a POST /api/chat
    return {
      id: Date.now(),
      role: 'assistant',
      content: `I received your message: "${message}". In a real deployment, I would process this using backend memory retrieval tools.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }
};
