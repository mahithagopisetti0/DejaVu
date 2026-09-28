import { useState, useEffect, useCallback } from 'react';
import { chatService } from '../services/chatService';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);
      const history = await chatService.getConversationHistory();
      setMessages(history);
    } catch (err) {
      setError('Failed to load chat history');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const sendMessage = async (text) => {
    const userMsg = {
      id: Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setSending(true);
    
    try {
      const reply = await chatService.sendMessage(text);
      setMessages(prev => [...prev, reply]);
    } catch (err) {
      // Handle error visually
      setMessages(prev => [...prev, { id: Date.now(), role: 'system', content: 'Message failed to send.', isError: true }]);
    } finally {
      setSending(false);
    }
  };

  return { messages, loading, sending, error, sendMessage };
}
