import { Card, CardContent } from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export function StatCard({ title, value, change, trend, icon: Icon }) {
  const renderTrend = () => {
    if (trend === 'up') {
      return (
        <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span>{change}</span>
        </div>
      );
    }

    if (trend === 'down') {
      return (
        <div className="flex items-center gap-1 text-red-600 text-xs font-medium">
          <ArrowDownRight className="w-3.5 h-3.5" />
          <span>{change}</span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
        <Minus className="w-3.5 h-3.5" />
        <span>{change}</span>
      </div>
    );
  };

  return (
    <Card className="h-full min-h-[145px]">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500 mb-2">
              {title}
            </p>

            <h4 className="text-2xl font-bold text-slate-900 truncate">
              {value}
            </h4>
          </div>

          {Icon && (
            <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Icon className="w-4.5 h-4.5" />
            </div>
          )}
        </div>

        <div className="mt-5">
          {renderTrend()}
        </div>
      </CardContent>
    </Card>
  );
}