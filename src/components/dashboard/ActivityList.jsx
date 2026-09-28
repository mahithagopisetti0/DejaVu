import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { mockRecentActivity } from '../../data/mockDashboard';
import { Activity, ShieldCheck, MessageSquare, BrainCircuit } from 'lucide-react';
import { Badge } from '../ui/Badge';

const typeIcons = {
  audit: ShieldCheck,
  chat: MessageSquare,
  memory: BrainCircuit,
};

const statusColors = {
  success: 'success',
  warning: 'warning',
  info: 'info',
};

export function ActivityList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-500" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-slate-100">
          {mockRecentActivity.map((activity) => {
            const Icon = typeIcons[activity.type] || Activity;
            return (
              <li key={activity.id} className="p-4 hover:bg-slate-50 transition-colors flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {activity.time}
                  </p>
                </div>
                <div>
                  <Badge variant={statusColors[activity.status] || 'default'}>
                    {activity.status}
                  </Badge>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
