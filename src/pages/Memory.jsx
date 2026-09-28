import { useMemory } from '../hooks/useMemory';
import { MemoryChart } from '../components/memory/MemoryChart';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { LoadingState, ErrorState } from '../components/ui/States';
import { BrainCircuit, Database, FileCode, MessageSquare, Mail } from 'lucide-react';

const categoryIcons = {
  'Legal Documents': FileCode,
  'Internal Chats': MessageSquare,
  'Code Commits': Database,
  'Customer Emails': Mail,
};

export default function Memory() {
  const { timeline, categories, totalIndexed, loading, error } = useMemory();

  if (loading) {
    return (
      <div className="p-6 h-full flex items-center justify-center">
        <LoadingState text="Loading memory graphs..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 h-full flex items-center justify-center">
        <ErrorState title="Failed" message={error} />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 leading-tight">Memory Visualizations</h1>
        <p className="text-slate-500 mt-1">Explore indexed contexts and vector knowledge base metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MemoryChart data={timeline} />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-slate-500">Total Vectors</CardTitle>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <span className="text-4xl font-bold text-slate-900">{totalIndexed.toLocaleString()}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-4">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-right">85% Capacity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Memory Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 pt-2">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat.name] || Database;
                  return (
                    <li key={cat.name} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{cat.name}</p>
                          <p className="text-xs text-slate-500">{cat.count.toLocaleString()} entries</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-indigo-600">{cat.percentage}%</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
