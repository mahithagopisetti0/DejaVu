import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { useAudits } from '../../hooks/useAudits';
import { Badge } from '../ui/Badge';
import { LoadingState, ErrorState, EmptyState } from '../ui/States';
import { FileText } from 'lucide-react';

const statusColors = {
  Draft: 'default',
  Pending: 'warning',
  'In Review': 'info',
  Completed: 'success',
};

export function RecentAudits({ limit = 3 }) {
  const { audits, loading, error } = useAudits();

  if (loading) return <Card><CardContent><LoadingState text="Loading audits..." /></CardContent></Card>;
  if (error) return <Card><CardContent><ErrorState title="Failed" message={error} /></CardContent></Card>;
  if (audits.length === 0) return <Card><CardContent><EmptyState title="No recent audits" /></CardContent></Card>;

  const recent = audits.slice(0, limit);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-500" />
          Recent Audits
        </CardTitle>
        <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-y border-slate-100">
              <tr>
                <th className="px-6 py-3 font-medium">Audit ID</th>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recent.map((audit) => (
                <tr key={audit.id} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{audit.id}</td>
                  <td className="px-6 py-4 text-slate-700 max-w-[200px] truncate">{audit.title}</td>
                  <td className="px-6 py-4">
                    <Badge variant={statusColors[audit.status] || 'default'}>{audit.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{audit.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
