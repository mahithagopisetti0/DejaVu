import { useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { MessageBubble } from '../components/chat/MessageBubble';
import { ChatInput } from '../components/chat/ChatInput';
import { LoadingState } from '../components/ui/States';
import { MessageSquare, MoreHorizontal } from 'lucide-react';

export default function Chat() {
  const { messages, loading, sending, error, sendMessage } = useChat();
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto border-x border-slate-200 bg-slate-50/50 animate-in fade-in duration-500 relative">
      <div className="flex-none px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-sm">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">AI Assistant</h2>
            <p className="text-xs text-green-600 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <LoadingState text="Loading conversation history..." />
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">How can I help you today?</h3>
            <p className="text-slate-500">I can analyze audits, query memory logs, or answer compliance questions based on your specialized context.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <span className="px-3 py-1 bg-slate-200/50 text-slate-500 rounded-full text-xs font-medium">History</span>
            </div>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {sending && (
              <div className="flex gap-3 max-w-[85%] mr-auto items-end">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 text-white shrink-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider">AI</span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </>
        )}
      </div>

      <ChatInput onSendMessage={sendMessage} disabled={loading || sending} />
    </div>
  );
}
