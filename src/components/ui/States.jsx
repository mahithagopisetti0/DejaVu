import { Loader2, AlertCircle, FileSearch } from 'lucide-react';
import { Button } from './Button';

export function LoadingState({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-slate-500 min-h-[200px] w-full h-full">
      <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-4" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export function ErrorState({ title = 'An error occurred', message = 'Something went wrong while fetching data.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
        <AlertCircle className="w-6 h-6 text-red-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 max-w-sm">{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}

export function EmptyState({ 
  icon: Icon = FileSearch, 
  title = 'No data found', 
  description = 'There are no items to display at this time.', 
  action 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 min-h-[250px]">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 max-w-sm mb-6">{description}</p>
      {action && action}
    </div>
  );
}
