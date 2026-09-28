import { Badge } from '../ui/Badge';
import { Eye } from 'lucide-react';

const statusColors = {
  Draft: 'default',
  Pending: 'warning',
  'In Review': 'info',
  Completed: 'success',
};

export function AuditTable({ audits, onViewDetails }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 font-semibold">Audit ID</th>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Assignee</th>
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {audits.map((audit) => (
            <tr key={audit.id} className="bg-white hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-900">{audit.id}</td>
              <td className="px-6 py-4 text-slate-700 font-medium">{audit.title}</td>
              <td className="px-6 py-4 text-slate-600">{audit.assignee}</td>
              <td className="px-6 py-4 text-slate-500">{audit.date}</td>
              <td className="px-6 py-4">
                <Badge variant={statusColors[audit.status] || 'default'}>{audit.status}</Badge>
              </td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={() => onViewDetails(audit)}
                  className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
