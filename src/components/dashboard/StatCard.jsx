import { Card, CardContent } from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export function StatCard({ title, value, change, trend, icon: Icon }) {
  const renderTrend = () => {
    if (trend === 'up') return <div className="flex items-center text-green-600 text-sm font-medium"><ArrowUpRight className="w-4 h-4 mr-1" />{change}</div>;
    if (trend === 'down') return <div className="flex items-center text-red-600 text-sm font-medium"><ArrowDownRight className="w-4 h-4 mr-1" />{change}</div>;
    return <div className="flex items-center text-slate-500 text-sm font-medium"><Minus className="w-4 h-4 mr-1" />{change}</div>;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h4 className="text-2xl font-bold text-slate-900">{value}</h4>
          </div>
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>
        <div className="mt-4">
          {renderTrend()}
        </div>
      </CardContent>
    </Card>
  );
}
