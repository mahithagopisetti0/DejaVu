import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = forwardRef(({ className = '', error, label, options = [], ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <div className="relative">
        <select
          ref={ref}
          className={`appearance-none flex h-10 w-full rounded-lg border border-slate-300 bg-white pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow ${
            error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

Select.displayName = 'Select';
