import { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

export function ChatInput({ onSendMessage, disabled }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-slate-200 flex items-end gap-2"
    >
      <button 
        type="button" 
        className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
        disabled={disabled}
      >
        <Paperclip className="w-5 h-5" />
      </button>
      
      <div className="relative flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask the AI assistant anything..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 min-h-[52px] max-h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 pr-12 transition-all placeholder:text-slate-400"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          disabled={disabled}
          rows={1}
        />
        <button 
          type="submit"
          disabled={!text.trim() || disabled}
          className="absolute right-2 bottom-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
