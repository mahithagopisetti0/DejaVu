import { Bot, User } from 'lucide-react';

export function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={`flex gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-800 text-white'}`}>
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div 
          className={`px-4 py-3 rounded-2xl ${
            isError 
              ? 'bg-red-50 text-red-700 border border-red-200'
              : isUser 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
          }`}
        >
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
        <span className="text-[11px] font-medium text-slate-400 mt-1 px-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
