import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ShieldAlert } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[600px] h-[calc(100vh-4rem)]">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        <ShieldAlert className="w-10 h-10 text-slate-400" />
      </div>
      <h1 className="text-6xl font-bold text-slate-900 mb-4 tracking-tight">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-2">Page not found</h2>
      <p className="text-slate-500 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved. Check the URL or navigate back to the dashboard.
      </p>
      <Button size="lg" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </Button>
    </div>
  );
}
