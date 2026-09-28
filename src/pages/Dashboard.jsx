import { useState } from 'react';
import { StatCard } from '../components/dashboard/StatCard';
import { ActivityList } from '../components/dashboard/ActivityList';
import { RecentAudits } from '../components/dashboard/RecentAudits';
import { MemoryChart } from '../components/memory/MemoryChart';
import { mockDashboardStats } from '../data/mockDashboard';
import { useMemory } from '../hooks/useMemory';
import { FileText, MessageSquare, BrainCircuit, Activity, PlusCircle, PlayCircle, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

function MemoryOverview() {
  const { timeline, loading, error } = useMemory();
  const [range, setRange] = useState('30D');

  if (loading || error) return null; // Avoid empty layout pop-in

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
        <div>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-indigo-500" />
            Memory Activity Overview
          </CardTitle>
          <p className="text-sm text-slate-500 mt-1">Total contextual tokens indexed and retrieved over time.</p>
        </div>
        <div className="flex bg-slate-100 rounded-lg p-1">
          {['7D', '30D', '90D'].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                range === r ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1 h-[300px]">
        <MemoryChart data={timeline} />
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { totalAudits, activeChats, memoriesIndexed, systemHealth } = mockDashboardStats;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-500">
      
      {/* 1 & 2. Page Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Monitor audits, conversations, memory activity, and system status.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => navigate('/audits/new')} className="gap-2 text-sm shadow-sm h-9 px-3">
            <PlusCircle className="w-4 h-4" /> Create Audit
          </Button>
          <Button variant="secondary" onClick={() => navigate('/chat')} className="gap-2 text-sm h-9 px-3">
            <PlayCircle className="w-4 h-4 text-blue-600" /> Open Chat
          </Button>
          <Button variant="secondary" onClick={() => navigate('/memory')} className="gap-2 text-sm h-9 px-3">
            <BrainCircuit className="w-4 h-4 text-purple-600" /> View Memory
          </Button>
        </div>
      </div>

      {/* 3. Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard 
          title="Total Audits"
          value={totalAudits.value}
          change={totalAudits.change}
          trend={totalAudits.trend}
          icon={ShieldCheck}
        />
        <StatCard 
          title="Active Chats"
          value={activeChats.value}
          change={activeChats.change}
          trend={activeChats.trend}
          icon={MessageSquare}
        />
        <StatCard 
          title="Memories Indexed"
          value={memoriesIndexed.value.toLocaleString()}
          change={memoriesIndexed.change}
          trend={memoriesIndexed.trend}
          icon={BrainCircuit}
        />
        <StatCard 
          title="System Health"
          value={systemHealth.value}
          change={systemHealth.change}
          trend={systemHealth.trend}
          icon={Activity}
        />
      </div>

      {/* 4. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-full">
          <RecentAudits limit={5} />
        </div>
        <div className="lg:col-span-1 flex flex-col h-full">
          <ActivityList />
        </div>
      </div>

      {/* 5. Memory Overview */}
      <MemoryOverview />

    </div>
  );
}
