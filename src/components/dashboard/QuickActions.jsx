import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { FileText, PlayCircle, PlusCircle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const actions = [
  { label: 'Start New Audit', icon: PlusCircle, path: '/audits/new', color: 'text-indigo-600', bg: 'bg-indigo-50 hover:bg-indigo-100' },
  { label: 'View Reports', icon: FileText, path: '/audits', color: 'text-emerald-600', bg: 'bg-emerald-50 hover:bg-emerald-100' },
  { label: 'Chat Assistant', icon: PlayCircle, path: '/chat', color: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100' },
  { label: 'Settings', icon: Settings, path: '/settings', color: 'text-slate-600', bg: 'bg-slate-50 hover:bg-slate-100' },
];

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => navigate(action.path)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-colors border border-transparent hover:border-slate-200 ${action.bg}`}
          >
            <action.icon className={`w-6 h-6 mb-2 ${action.color}`} />
            <span className="text-sm font-medium text-slate-700 text-center">{action.label}</span>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
